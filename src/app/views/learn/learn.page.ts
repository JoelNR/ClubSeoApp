import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';

interface NavSection {
  id: string;
  label: string;
}

interface NavGroup {
  title: string;
  icon: string;
  hint: string;
  sections: NavSection[];
}

interface FaceRing {
  r: number;
  fill: string;
  stroke: string;
}

interface FaceDiagram {
  name: string;
  spec: string;
  where: string;
  rings: FaceRing[];
  triple?: boolean;
  xRing?: boolean;
  custom?: string;
}

interface MatrixCell {
  distance: string;
  face: string;
}

interface MatrixRow {
  category: string;
  age: string;
  cells: (MatrixCell | null)[];
}

interface Discipline {
  name: string;
  icon: string;
  club: 'yes' | 'no';
  headline: string;
  rows: { label: string; value: string }[];
  note: string;
}

interface Signal {
  signal: string;
  meaning: string;
  tone: 'line' | 'start' | 'warn' | 'stop' | 'score';
}

interface League {
  acronym: string;
  name: string;
  tag: string;
  logo?: string;
  body: string;
  link: string;
  linkLabel: string;
}

interface WhatIf {
  title: string;
  icon: string;
  body: string;
}

interface Step {
  title: string;
  body: string;
  icon: string;
}

interface Term {
  term: string;
  definition: string;
}

/** Ring colours indexed by ring value: position 0 is the 1-ring, position 9 the 10-ring. */
const FACE_COLOURS: string[] = [
  '#FFFFFF',
  '#FFFFFF',
  '#1B1B1B',
  '#1B1B1B',
  '#009BDE',
  '#009BDE',
  '#E4002B',
  '#E4002B',
  '#F6C900',
  '#F6C900',
];

const RING_LINE_DARK = 'rgba(27, 27, 27, 0.45)';
const RING_LINE_LIGHT = 'rgba(255, 255, 255, 0.65)';

const FIELD_COLOURS: string[] = [
  '#1B1B1B',
  '#1B1B1B',
  '#1B1B1B',
  '#1B1B1B',
  '#F6C900',
  '#F6C900',
];

/** Radius of each field ring as a fraction of the face radius, indexed by value. */
const FIELD_RADII: number[] = [1, 0.8, 0.6, 0.4, 0.2, 0.1];

const targetRings = (from: number, to: number): FaceRing[] => {
  const rings: FaceRing[] = [];
  for (let value = from; value <= to; value++) {
    const fill = FACE_COLOURS[value - 1];
    rings.push({
      r: (11 - value) / 10,
      fill,
      stroke: fill === '#1B1B1B' ? RING_LINE_LIGHT : RING_LINE_DARK,
    });
  }
  return rings;
};

const fieldRings = (): FaceRing[] =>
  [1, 2, 3, 4, 5, 6].map(value => ({
    r: FIELD_RADII[value - 1],
    fill: FIELD_COLOURS[value - 1],
    stroke: RING_LINE_LIGHT,
  }));


@Component({
  selector: 'app-learn',
  templateUrl: './learn.page.html',
  styleUrls: ['./learn.page.scss'],
})
export class LearnPage extends CapacitorBase implements AfterViewInit, OnDestroy {
  @ViewChild('navRoot') private navRoot?: ElementRef<HTMLElement>;
  @ViewChild('indexButton') private indexButton?: ElementRef<HTMLButtonElement>;

  activeSection = 'lineas';
  menuOpen = false;

  readonly navGroups: NavGroup[] = [
    {
      title: 'En la línea',
      icon: 'compass-outline',
      hint: 'Dónde te colocas y cuándo',
      sections: [
        { id: 'lineas', label: 'Las tres líneas' },
        { id: 'turnos', label: 'Turnos' },
        { id: 'tiempo', label: 'Tiempo y señales' },
      ],
    },
    {
      title: 'Qué llevas y qué ves',
      icon: 'shirt-outline',
      hint: 'Ropa, dianas y modalidades',
      sections: [
        { id: 'ropa', label: 'Ropa' },
        { id: 'dianas', label: 'Las dianas' },
        { id: 'modalidades', label: 'Modalidades' },
      ],
    },
    {
      title: 'Puntuación',
      icon: 'stats-chart-outline',
      hint: 'Cómo se cuenta y qué pasa si algo sale mal',
      sections: [
        { id: 'puntuacion', label: 'Puntuar' },
        { id: 'eliminatorias', label: 'Clasificatoria y eliminatorias' },
        { id: 'imprevistos', label: 'Imprevistos' },
      ],
    },
    {
      title: 'Competición',
      icon: 'trophy-outline',
      hint: 'Distancias, ligas y primer día',
      sections: [
        { id: 'matriz', label: 'Distancias' },
        { id: 'ligas', label: 'Ligas' },
        { id: 'primera', label: 'Tu primera tirada' },
        { id: 'glosario', label: 'Glosario' },
      ],
    },
  ];

  readonly sections: NavSection[] = this.navGroups.reduce(
    (all: NavSection[], group: NavGroup) => all.concat(group.sections),
    []
  );

  readonly essentials: string[] = [
    'Solo tiras cuando estás en la línea de tiro y la señal está en verde.',
    'Mientras no te toca, esperas detrás de la línea de espera con tu material.',
    'Si una flecha se cae y se queda antes de la línea de 3 m, no cuenta como disparada.',
    'No toques las flechas de la diana hasta que se canten y se apunten.',
  ];

  readonly lineas = [
    {
      name: 'Línea de espera',
      icon: 'arrow-undo-outline',
      body:
        'Está detrás de la línea de tiro. Ahí esperas con el arco, las flechas y la silla si la necesitas. ' +
        'Cuando terminas tus flechas, vuelves detrás de ella aunque quede tiempo.',
      footnote: 'Reglamento: mínimo 3 m en sala y 5 m al aire libre. En nuestro campo puede haber más distancia.',
    },
    {
      name: 'Línea de tiro',
      icon: 'remove-outline',
      body:
        'Es la marca donde te colocas para disparar. Tu cuerpo queda detrás de ella. ' +
        'Solo se sube cuando el juez da la señal, y mientras no te toca no se tensa el arco.',
      footnote: 'Regla: no se puede tensar el arco, con o sin flecha, si no estás en la línea de tiro.',
    },
    {
      name: 'Línea de 3 m',
      icon: 'arrow-forward-outline',
      body:
        'Está delante de la línea de tiro, hacia las dianas. Si una flecha se te cae o sale mal y parte ' +
        'del tubo se queda entre la línea de tiro y esta marca, la flecha no se considera disparada: ' +
        'puedes tirar otra en su lugar.',
      footnote: 'Si la flecha cruza la línea de 3 m, cuenta como disparada. Y casi seguro será un fallo.',
    },
  ];

  readonly faces: FaceDiagram[] = [
    {
      name: '122 cm · completa',
      spec: '10 anillos · 5 colores',
      where: 'Aire libre · recurvo',
      rings: targetRings(1, 10),
      xRing: true,
    },
    {
      name: '80 cm · reducida',
      spec: '6 anillos · del 10 al 5',
      where: 'Aire libre · compuesto',
      rings: targetRings(5, 10),
    },
    {
      name: '40 cm · completa',
      spec: '10 anillos · 5 colores',
      where: 'Sala · menores U15',
      rings: targetRings(1, 10),
    },
    {
      name: '40 cm · triple vertical',
      spec: '3 caras · 6 anillos cada una',
      where: 'Sala · U18 en adelante',
      rings: targetRings(5, 10),
      triple: true,
    },
    {
      name: 'Diana de campo',
      spec: '6 zonas · del 6 al 1',
      where: 'Campo · 20 / 40 / 60 / 80 cm',
      rings: fieldRings(),
    },
    {
      name: 'Figura 3D',
      spec: 'Zonas 11 · 10 · 8 · 5',
      where: '3D · zona vital',
      rings: [],
      custom: 'animal',
    },
  ];

  readonly faceUsage = [
    { face: '122 cm completa', discipline: 'Aire libre (recurvo)', distance: '70 / 60 / 40 m', arrows: '72 en clasificatoria' },
    { face: '80 cm reducida', discipline: 'Aire libre (compuesto)', distance: '50 / 40 m', arrows: '72 en clasificatoria' },
    { face: '40 cm completa', discipline: 'Sala (menores U15)', distance: '18 m', arrows: '60 en clasificatoria' },
    { face: '40 cm triple vertical', discipline: 'Sala (U18 en adelante)', distance: '18 m', arrows: '60 en clasificatoria' },
    { face: 'Campo 20 / 40 / 60 / 80', discipline: 'Campo', distance: 'Variable, marcada o no', arrows: '3 por diana' },
    { face: 'Figura de animal', discipline: '3D', distance: 'Variable, no marcada', arrows: '2 por diana' },
  ];

  readonly disciplines: Discipline[] = [
    {
      name: 'Sala',
      icon: 'home-outline',
      club: 'yes',
      headline: '18 metros bajo techo',
      rows: [
        { label: 'Distancia', value: '18 m' },
        { label: 'Flechas', value: '60 en clasificatoria' },
        { label: 'Diana', value: '40 cm completa o triple vertical' },
        { label: 'Ritmo', value: 'Tandas de 3 flechas' },
        { label: 'Dónde', value: 'Pabellón o nave cubierta' },
      ],
      note: 'Es la temporada de invierno. Poca luz, mucho ruido y todo el mundo muy cerca: la técnica manda más que la fuerza.',
    },
    {
      name: 'Aire libre',
      icon: 'sunny-outline',
      club: 'yes',
      headline: 'De 70 a 30 metros, con viento',
      rows: [
        { label: 'Distancia', value: '70 / 60 / 50 / 40 / 30 m según categoría y estilo' },
        { label: 'Flechas', value: '72 en clasificatoria' },
        { label: 'Diana', value: '122 cm completa u 80 cm reducida' },
        { label: 'Ritmo', value: 'Tandas de 6 flechas' },
        { label: 'Dónde', value: 'Campo con calles de tiro' },
      ],
      note: 'Es la modalidad de verano. Aquí el viento, el sol y la espera entre turnos forman parte del resultado.',
    },
    {
      name: 'Campo',
      icon: 'trail-sign-outline',
      club: 'no',
      headline: 'Un recorrido, piquetas de colores',
      rows: [
        { label: 'Distancia', value: 'Variable, marcada o desconocida' },
        { label: 'Flechas', value: '3 por diana' },
        { label: 'Diana', value: 'Caras de campo de 20, 40, 60 u 80 cm' },
        { label: 'Ritmo', value: '3 minutos por diana (1 min por flecha)' },
        { label: 'Dónde', value: 'Recorrido por el monte' },
      ],
      note:
        'Se camina de diana en diana y se tira desde una piqueta de color según tu división. ' +
        'No lo practicamos en el club, pero lo verás en campeonatos.',
    },
    {
      name: '3D',
      icon: 'paw-outline',
      club: 'no',
      headline: 'Animales de gomaespuma y una zona vital',
      rows: [
        { label: 'Distancia', value: 'Variable y no marcada' },
        { label: 'Flechas', value: '2 por diana en clasificación' },
        { label: 'Diana', value: 'Figura de animal, zonas 11 / 10 / 8 / 5' },
        { label: 'Ritmo', value: '2 minutos por diana (2 flechas)' },
        { label: 'Dónde', value: 'Recorrido con figuras' },
      ],
      note: 'La gracia es calcular la distancia a ojo. Cuernos, pezuñas y colas no puntúan. Tampoco lo practicamos en el club.',
    },
  ];

  readonly signals: Signal[] = [
    { signal: 'Dos silbidos + luz roja', meaning: 'Puedes entrar en la línea de tiro. Tienes 10 segundos para colocarte.', tone: 'line' },
    { signal: 'Un silbido + luz verde', meaning: 'Empieza el tiempo de tiro. Ya se puede disparar.', tone: 'start' },
    { signal: 'Luz amarilla', meaning: 'Quedan 30 segundos. Si te falta alguna flecha, es el momento.', tone: 'warn' },
    { signal: 'Dos silbidos + luz roja', meaning: 'Se acabó el tiempo. Las flechas que no hayas tirado se pierden.', tone: 'stop' },
    { signal: 'Tres silbidos', meaning: 'Se puede ir a la diana a cantar y recoger las flechas.', tone: 'score' },
  ];

  readonly timings = [
    { mode: 'Sala', time: '2 minutos por tanda de 3', source: 'Reglamento WA, clasificatoria' },
    { mode: 'Aire libre', time: '4 minutos por tanda de 6', source: 'Reglamento WA, clasificatoria' },
    { mode: 'Campo', time: '3 minutos por diana (3 flechas)', source: 'Reglamento WA, campo' },
    { mode: '3D', time: '2 minutos por diana (2 flechas)', source: 'Reglamento WA, 3D' },
  ];

  readonly scoring = [
    'Se puntúa por la posición del tubo, no por donde entra la punta.',
    'Si el tubo toca dos zonas o una línea, vale la zona más alta.',
    'El 10 es el anillo interior; la X es el círculo de dentro del 10 y solo sirve para desempatar.',
    'El arquero canta sus flechas de mayor a menor y los demás comprueban.',
    'Nadie toca flechas, diana ni arco hasta que la tanda está apuntada.',
    'Se marcan los agujeros para poder resolver rebotes y flechas dudosas.',
    'Un fallo se apunta como M. No se deja en blanco.',
    'Firma tu tarjeta: la de papel manda sobre la electrónica si hay diferencias.',
  ];

  readonly whatIfs: WhatIf[] = [
    {
      title: 'Se te cae la flecha',
      icon: 'arrow-down-outline',
      body:
        'Si parte del tubo queda entre la línea de tiro y la línea de 3 m, la flecha no cuenta como ' +
        'disparada y puedes tirar otra. Si cruza la línea de 3 m, cuenta como disparada y se apunta como fallo.',
    },
    {
      title: 'Llegas tarde',
      icon: 'time-outline',
      body:
        'Pierdes las flechas que ya se han tirado. Si el juez considera que fue por una causa ajena a ti, ' +
        'te deja recuperarlas al terminar la distancia, con un máximo de 12 flechas.',
    },
    {
      title: 'Se te rompe algo',
      icon: 'construct-outline',
      body:
        'Levanta la mano y avisa al juez. Puedes salir de la línea y volver si queda tiempo. ' +
        'En tiradas internacionales no se añade tiempo por una avería, así que lleva repuestos.',
    },
    {
      title: 'La flecha rebota o se queda colgando',
      icon: 'return-down-back-outline',
      body:
        'Deja de tirar y llama al juez, sin tocar nada. El juez mira la marca en la diana o la posición ' +
        'de la flecha colgante y decide el valor. No es un fallo automático.',
    },
    {
      title: 'Clavas una flecha en otra',
      icon: 'git-merge-outline',
      body: 'Se llama Robin Hood y puntúa lo mismo que la flecha golpeada. Si se puede identificar, claro.',
    },
    {
      title: 'La flecha se va a la diana de al lado',
      icon: 'swap-horizontal-outline',
      body: 'Cuenta como parte de tu tanda y se apunta como fallo. No se repite.',
    },
  ];

  readonly matrixRows: MatrixRow[] = [
    {
      category: 'Menores',
      age: 'U15 · hasta 14 años',
      cells: [
        { distance: '18 m', face: '40 cm completa' },
        { distance: '18 m', face: '40 cm completa' },
        null,
        null,
      ],
    },
    {
      category: 'Cadete',
      age: 'U18 · hasta 17 años',
      cells: [
        { distance: '18 m', face: 'Triple vertical R' },
        { distance: '18 m', face: 'Triple vertical C' },
        null,
        null,
      ],
    },
    {
      category: 'Júnior',
      age: 'U21 · hasta 20 años',
      cells: [
        { distance: '18 m', face: 'Triple vertical R' },
        { distance: '18 m', face: 'Triple vertical C' },
        null,
        null,
      ],
    },
    {
      category: 'Sénior / Absoluta',
      age: '21 a 49 años',
      cells: [
        { distance: '18 m', face: 'Triple vertical R' },
        { distance: '18 m', face: 'Triple vertical C' },
        { distance: '18 m', face: '40 cm completa' },
        { distance: '18 m', face: '40 cm completa' },
      ],
    },
    {
      category: 'Veterano',
      age: '50 años o más',
      cells: [
        { distance: '18 m', face: 'Triple vertical R' },
        { distance: '18 m', face: 'Triple vertical C' },
        null,
        null,
      ],
    },
  ];

  readonly outdoorRows: MatrixRow[] = [
    {
      category: 'Menores',
      age: 'U15 · hasta 14 años',
      cells: [
        { distance: '40 m', face: '122 cm' },
        { distance: '40 m', face: '80 cm reducida' },
        { distance: '30 m', face: '122 cm' },
        null,
      ],
    },
    {
      category: 'Cadete',
      age: 'U18 · hasta 17 años',
      cells: [
        { distance: '60 m', face: '122 cm' },
        { distance: '50 m', face: '80 cm reducida' },
        { distance: '50 m', face: '122 cm' },
        null,
      ],
    },
    {
      category: 'Júnior',
      age: 'U21 · hasta 20 años',
      cells: [
        { distance: '70 m', face: '122 cm' },
        { distance: '50 m', face: '80 cm reducida' },
        { distance: '50 m', face: '122 cm' },
        null,
      ],
    },
    {
      category: 'Sénior / Absoluta',
      age: '21 a 49 años',
      cells: [
        { distance: '70 m', face: '122 cm' },
        { distance: '50 m', face: '80 cm reducida' },
        { distance: '50 m', face: '122 cm' },
        { distance: '30 m', face: '80 / 122 cm' },
      ],
    },
    {
      category: 'Veterano',
      age: '50 años o más',
      cells: [
        { distance: '60 m', face: '122 cm' },
        { distance: '50 m', face: '80 cm reducida' },
        null,
        null,
      ],
    },
  ];

  readonly leagues: League[] = [
    {
      acronym: 'GPC',
      name: 'Gran Premio de Canarias',
      tag: 'Aire libre · ranking autonómico',
      logo: '/assets/img/logo_fecta.png',
      body:
        'Circuito de tiradas al aire libre repartidas por las islas. Cada prueba suma para el ' +
        'Ranking Canario de Aire Libre de tu categoría y división.',
      link: 'https://www.fecta.org/competiciones/raal/',
      linkLabel: 'Clasificación GPC en la FECTA',
    },
    {
      acronym: 'RAUS',
      name: 'Ranking Autonómico Unificado de Sala',
      tag: 'Sala · ranking autonómico y nacional',
      logo: '/assets/img/logo_fecta.png',
      body:
        'El ranking de sala. Las tiradas registradas cuentan para la clasificación autonómica y también ' +
        'para la nacional, así que una buena tirada en Canarias puede mover tu puesto en España.',
      link: 'https://www.fecta.org/competiciones/raus-2019-2020/',
      linkLabel: 'RAUS en la FECTA',
    },
    {
      acronym: 'ATIRCA',
      name: 'Asociación Canaria de Tiro con Arco',
      tag: 'Sala y aire libre · ligas y trofeos',
      logo: '/assets/img/logo_atirca.png',
      body:
        'Organiza su propia liga de sala y de aire libre, además de los Trofeos Atlántico. ' +
        'Su calendario y sus clasificaciones se publican en su web, no en la de la federación.',
      link: 'https://asociacionatirca.wixsite.com/atirca',
      linkLabel: 'Web de ATIRCA',
    },
  ];

  readonly steps: Step[] = [
    {
      title: 'Ten la licencia en regla',
      body: 'Para competir necesitas licencia federativa de la FECTA. Se tramita con el club y cubre la temporada.',
      icon: 'card-outline',
    },
    {
      title: 'Mira el calendario',
      body: 'Las tiradas del club y las convocatorias aparecen en la página de competiciones. Fíjate en modalidad, fecha y lugar.',
      icon: 'calendar-outline',
    },
    {
      title: 'Inscríbete antes del plazo',
      body:
        'El plazo lo fija la convocatoria de cada tirada. Apúntate con margen y confirma la fecha límite ' +
        'antes de darlo por hecho.',
      icon: 'send-outline',
    },
    {
      title: 'Confirma tu categoría',
      body: 'Categoría por edad y división por estilo. Con eso ya sabes distancia y diana: mira la tabla de esta misma página.',
      icon: 'person-outline',
    },
    {
      title: 'Prepara el material',
      body:
        'Arco, flechas de sobra, tab o guante, protector de brazo, carcaj, marcas de vista y una cuerda ' +
        'de repuesto. Las flechas, marcadas con tu nombre.',
      icon: 'briefcase-outline',
    },
    {
      title: 'Llega con tiempo',
      body: 'Entre 45 y 60 minutos antes. Da tiempo a recoger, montar, revisar el sorteo de dianas y calentar sin prisas.',
      icon: 'time-outline',
    },
    {
      title: 'Calienta y escucha al juez',
      body: 'Habrá tiradas de práctica antes de puntuar. Aprovecha para comprobar viento y vista, y escucha las indicaciones de la línea.',
      icon: 'megaphone-outline',
    },
    {
      title: 'Tira, firma y revisa',
      body: 'Al terminar, comprueba tu tarjeta: total, número de 10 y de X (o de 9 en sala). Si algo no cuadra, avisa antes de firmar.',
      icon: 'checkmark-done-outline',
    },
  ];

  readonly packingList: string[] = [
    'Arco montado y revisado',
    'Flechas de sobra, marcadas',
    'Tab o guante',
    'Protector de brazo',
    'Carcaj',
    'Marcas de vista',
    'Cuerda y nocks de repuesto',
    'Camiseta deportiva',
    'Zapatillas deportivas',
    'Agua y algo de comer',
    'Protección solar',
    'Bolígrafo',
    'Licencia o dorsal',
  ];

  readonly glossary: Term[] = [
    { term: 'Tanda', definition: 'Grupo de flechas que se tira antes de ir a puntuar: 3 o 6 según la modalidad.' },
    { term: 'Turno', definition: 'El subgrupo que comparte diana y tira a la vez, identificado con letras (AB, CD).' },
    { term: 'Sorteo de dianas', definition: 'Asignación previa de diana y turno. No se elige.' },
    { term: 'Clasificatoria', definition: 'Ronda en la que todos tiran las mismas flechas y se ordenan por puntuación.' },
    { term: 'Eliminatoria', definition: 'Enfrentamiento directo que sale de la clasificatoria. Propia de campeonatos.' },
    { term: 'Shoot-off', definition: 'Desempate a una flecha: gana la más cercana al centro.' },
    { term: 'Piqueta', definition: 'Punto de tiro de un recorrido de campo o 3D, de color según tu división.' },
    { term: 'Zona vital', definition: 'Zona de puntuación de una figura 3D: 11, 10, 8 y 5.' },
    { term: 'X', definition: 'Círculo interior del 10. Solo cuenta para desempatar.' },
    { term: 'M', definition: 'Fallo. Así se apunta una flecha que no puntúa.' },
    { term: 'Round 1440', definition: 'Prueba de aire libre con cuatro distancias y 36 flechas en cada una.' },
    { term: 'Doble puntuable', definition: 'Una tirada que cuenta para dos ligas a la vez, por eso lleva dos nombres.' },
  ];

  private observer?: IntersectionObserver;

  constructor() {
    super();
  }

  get activeIndex(): number {
    return this.sections.findIndex(section => section.id === this.activeSection);
  }

  get activeSectionLabel(): string {
    return this.sections[this.activeIndex]?.label ?? '';
  }

  get activeGroup(): NavGroup | undefined {
    return this.navGroups.find(group => group.sections.some(section => section.id === this.activeSection));
  }

  get activeGroupIndex(): number {
    const group = this.activeGroup;
    return group ? this.navGroups.indexOf(group) : 0;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.menuOpen) {
      return;
    }
    const root = this.navRoot?.nativeElement;
    if (root && !root.contains(event.target as Node)) {
      this.closeMenu();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.menuOpen) {
      this.closeMenu();
      this.indexButton?.nativeElement.focus();
    }
  }

  ngAfterViewInit(): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const elements = Array.from(document.querySelectorAll('[data-learn-section]'));
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );
    elements.forEach(element => this.observer?.observe(element));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    if (!this.menuOpen) {
      return;
    }

    // If the bar is still below its sticky position (top of the page), the index
    // would open off-screen. Bring the bar under the header first.
    const nav = this.navRoot?.nativeElement;
    if (!nav) {
      return;
    }
    const offset = window.matchMedia('(min-width: 1024px)').matches ? 80 : 64;
    if (nav.getBoundingClientRect().top > offset + 2) {
      nav.scrollIntoView({ block: 'start', behavior: this.scrollBehavior() });
    }
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  sectionNumber(id: string): string {
    const index = this.sections.findIndex(section => section.id === id);
    return String(index + 1).padStart(2, '0');
  }

  goTo(id: string): void {
    this.closeMenu();
    this.setActiveSection(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: this.scrollBehavior(), block: 'start' });
    }
    // The panel is gone after choosing, so keep keyboard focus on its trigger.
    this.indexButton?.nativeElement.focus({ preventScroll: true });
  }

  faceViewBox(face: FaceDiagram): string {
    return face.triple ? '0 0 100 130' : '0 0 100 100';
  }

  faceRadius(face: FaceDiagram): number {
    return face.triple ? 20 : 50;
  }

  tripleCentres(): number[] {
    return [22, 65, 108];
  }

  /** Keeps the sticky bar in sync with the section that is currently being read. */
  private setActiveSection(id: string): void {
    if (this.activeSection !== id) {
      this.activeSection = id;
    }
  }

  private scrollBehavior(): ScrollBehavior {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  }
}
