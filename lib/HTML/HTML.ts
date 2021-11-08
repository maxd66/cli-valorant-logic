class HTML {
  writePage(agent: string): string {
    return `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>ValoRandom</title>
          </head>
          <body>
            <h1>Hey this is ValoRandom</h1>
            <h2>Your selected agent is ${agent}.</h2>
          </body>
        </html>
        `;
  }
}

export default HTML;
