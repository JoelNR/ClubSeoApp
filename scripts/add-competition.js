const fs = require('fs');
const path = require('path');
const readline = require('readline');

const filePath = path.join(__dirname, '../src/assets/competitions/competitions.json');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = (query, defaultValue = '') => {
  return new Promise((resolve) => {
    const prompt = defaultValue ? `${query} [${defaultValue}]: ` : `${query}: `;
    rl.question(prompt, (answer) => {
      resolve(answer.trim() || defaultValue);
    });
  });
};

async function main() {
  try {
    console.log('=== Create New Competition ===\n');

    const title = await askQuestion('Competition Title');
    if (!title) {
      console.error('Error: Title is required!');
      process.exit(1);
    }

    const closingLimit = await askQuestion('Closing date/time for registration (e.g., Miércoles 13 de Mayo al medio día)');
    const description = `Podrás completar tu inscripción simplemente rellenando el siguiente formulario antes del ${closingLimit}`;

    const modality = await askQuestion('Modality', 'Aire libre');
    const link = await askQuestion('Link / URL');
    
    // Default date to today
    const today = new Date().toISOString().split('T')[0];
    const date = await askQuestion('Date (YYYY-MM-DD)', today);
    const image = await askQuestion('Image Path', '');

    rl.close();

    const newCompetition = {
      title,
      description,
      modality,
      link,
      date,
      image
    };

    console.log('\nNew competition data:');
    console.log(JSON.stringify(newCompetition, null, 4));

    // Read existing file
    let competitions = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf8');
      competitions = JSON.parse(fileData);
    }

    // Add to top of the array
    competitions.unshift(newCompetition);

    // Save back to file
    fs.writeFileSync(filePath, JSON.stringify(competitions, null, 4) + '\n', 'utf8');
    console.log(`\nSaved new competition to ${filePath}`);

  } catch (error) {
    console.error('Error occurred:', error.message);
    process.exit(1);
  }
}

main();
