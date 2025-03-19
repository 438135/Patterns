const data = `city,population,area,density,country
  Shanghai, 24256800,6340,3826,China
  Delhi,16787941,1484,11313,India
  Lagos,16060303,1171,13712,Nigeria
  Istanbul,14160467,5461,2593,Turkey
  Tokyo,13513734,2191,6168,Japan
  Sao Paulo,12038175,1521,7914,Brazil
  Mexico City,8874724,1486,5974,Mexico
  London,8673713,1572,5431,United Kingdom
  New York City,8537673,784,10892,United States
  Bangkok,8280925,1569,5279,Thailand`;

function formatData(data) {
  const lines = data
    .split('\n')
    .map(line => line.trim().split(','));


  const densities = lines.slice(1).map(line => Number(line[3]));
  const maxDensity = Math.max(...densities);

  lines.forEach((line, i) => {
    if (!checkData(line)) {
      throw new Error(`not_valid_data. There must be 5 elements in a row: ${line}`);
    }

    if (i === 0) {
      line.push('percent_of_density');
    } else {
      line.push(Math.round((Number(line[3]) * 100) / maxDensity).toString());
    }
  });

  lines.sort((a, b) => b[3] - a[3]);

  lines.forEach(row => {
    const formattedRow = [
      row[0].padEnd(18),
      row[1].padStart(10),
      row[2].padStart(8),
      row[3].padStart(8),
      row[4].padStart(18),
      row[5].padStart(20)
    ].join('');
    console.log(formattedRow);
  });
}

function checkData(data) {
  return data.length % 5 === 0;
}

formatData(data);
