import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    if (!value) return '';

    // 1. Escape HTML to prevent injection
    let html = value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // 2. Headings (### header -> h3, ## header -> h2, etc.)
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-base font-extrabold mt-4 mb-2 text-orange">$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-lg font-black mt-4 mb-2 text-orange">$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-xl font-black mt-4 mb-2 text-orange">$1</h1>');

    // 3. Bold (**text** -> <strong>text</strong>)
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // 4. Italics (*text* -> <em>text</em>)
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // 5. Unordered List Items (- item -> <li>item</li> or * item -> <li>item</li>)
    // Match line-start spaces followed by - or *
    html = html.replace(/^\s*[-*]\s+(.*)$/gim, '<li>$1</li>');

    // Wrap groups of <li> in <ul>
    // We replace sequences of <li>...</li> with <ul><li>...</li></ul>
    html = html.replace(/(<li>.*?<\/li>)+/gs, '<ul>$&</ul>');

    // 6. Paragraphs and line breaks
    // Convert newlines to <br> for plain text lines that aren't inside lists or tags
    html = html.replace(/\n/g, '<br>');

    // Optional style adjustments for lists inside our output
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
