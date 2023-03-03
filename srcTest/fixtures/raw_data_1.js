const raw_data_1 = [
  {
    currency: 'CAD',
    date: '2023-01-10T14:30:00Z',
    earningsDelta: 0,
    earningsPercentage: 0,
    netDeposits: 0,
    value: 10,
  },
  {
    currency: 'CAD',
    date: '2023-01-10T15:00:00Z',
    earningsDelta: 0,
    earningsPercentage: 0,
    netDeposits: 0,
    value: 10,
  },
  {
    currency: 'CAD',
    date: '2023-01-10T15:30:00Z',
    earningsDelta: 0,
    earningsPercentage: 0,
    netDeposits: 0,
    value: 10,
  },
  {
    currency: 'CAD',
    date: '2023-01-10T16:00:00Z',
    earningsDelta: 0,
    earningsPercentage: 0,
    netDeposits: 0,
    value: 10,
  },
  {
    currency: 'CAD',
    date: '2023-01-10T16:30:00Z',
    earningsDelta: 0,
    earningsPercentage: 0,
    netDeposits: 0,
    value: 10,
  },
  {
    currency: 'CAD',
    date: '2023-01-10T17:00:00Z',
    earningsDelta: 0,
    earningsPercentage: 0,
    netDeposits: 0,
    value: 10,
  },
  {
    currency: 'CAD',
    date: '2023-01-10T17:30:00Z',
    earningsDelta: 0,
    earningsPercentage: 0,
    netDeposits: 0,
    value: 10,
  },
  {
    currency: 'CAD',
    date: '2023-01-10T18:00:00Z',
    earningsDelta: 0,
    earningsPercentage: 0,
    netDeposits: 0,
    value: 10,
  },
  {
    currency: 'CAD',
    date: '2023-01-10T18:30:00Z',
    earningsDelta: -10,
    earningsPercentage: 0,
    netDeposits: 10,
    value: 10,
  },
  {
    currency: 'CAD',
    date: '2023-01-10T19:00:00Z',
    earningsDelta: -200.1,
    earningsPercentage: 0,
    netDeposits: 200.1,
    value: 200.1,
  },
  {
    currency: 'CAD',
    date: '2023-01-10T19:30:00Z',
    earningsDelta: -200.1,
    earningsPercentage: 0,
    netDeposits: 200.1,
    value: 200.1,
  },
  {
    currency: 'CAD',
    date: '2023-01-10T20:00:00Z',
    earningsDelta: -200.1,
    earningsPercentage: 0,
    netDeposits: 200.1,
    value: 200.1,
  },
  {
    currency: 'CAD',
    date: '2023-01-10T20:30:00Z',
    earningsDelta: -200.1,
    earningsPercentage: 0,
    netDeposits: 200.1,
    value: 200.1,
  },
  {
    currency: 'CAD',
    date: '2023-01-10T21:00:00Z',
    earningsDelta: -200.1,
    earningsPercentage: -40.02,
    netDeposits: 200.1,
    value: 200.1,
  },
  {
    currency: 'CAD',
    date: '2023-01-11T14:30:00Z',
    earningsDelta: -200.1,
    earningsPercentage: -40.02,
    netDeposits: 200.1,
    value: 200.1,
  },
  {
    currency: 'CAD',
    date: '2023-01-11T15:00:00Z',
    earningsDelta: -195.02,
    earningsPercentage: -2.4944998720900484,
    netDeposits: 200.1,
    value: 205.18,
  },
  {
    currency: 'CAD',
    date: '2023-01-11T15:30:00Z',
    earningsDelta: -195.16,
    earningsPercentage: -2.5007688364941054,
    netDeposits: 200.1,
    value: 205.04,
  },
  {
    currency: 'CAD',
    date: '2023-01-11T16:00:00Z',
    earningsDelta: -195.74,
    earningsPercentage: -2.5269816679576556,
    netDeposits: 200.1,
    value: 204.46,
  },
  {
    currency: 'CAD',
    date: '2023-01-11T16:30:00Z',
    earningsDelta: -195.48,
    earningsPercentage: -2.515182707153886,
    netDeposits: 200.1,
    value: 204.72,
  },
  {
    currency: 'CAD',
    date: '2023-01-11T17:00:00Z',
    earningsDelta: -195.64,
    earningsPercentage: -2.522434244455905,
    netDeposits: 200.1,
    value: 204.56,
  },
  {
    currency: 'CAD',
    date: '2023-01-11T17:30:00Z',
    earningsDelta: -195.79,
    earningsPercentage: -2.5292597855574215,
    netDeposits: 200.1,
    value: 204.41,
  },
  {
    currency: 'CAD',
    date: '2023-01-11T18:00:00Z',
    earningsDelta: -195.79,
    earningsPercentage: -2.5292597855574215,
    netDeposits: 200.1,
    value: 204.41,
  },
  {
    currency: 'CAD',
    date: '2023-01-11T18:30:00Z',
    earningsDelta: -195.69,
    earningsPercentage: -2.5247064894852276,
    netDeposits: 200.1,
    value: 204.51,
  },
  {
    currency: 'CAD',
    date: '2023-01-11T19:00:00Z',
    earningsDelta: -195.51,
    earningsPercentage: -2.516540095250354,
    netDeposits: 200.1,
    value: 204.69,
  },
  {
    currency: 'CAD',
    date: '2023-01-11T19:30:00Z',
    earningsDelta: -195.62,
    earningsPercentage: -2.5215261665377673,
    netDeposits: 200.1,
    value: 204.58,
  },
  {
    currency: 'CAD',
    date: '2023-01-11T20:00:00Z',
    earningsDelta: -195.55,
    earningsPercentage: -2.518351577591758,
    netDeposits: 200.1,
    value: 204.65,
  },
  {
    currency: 'CAD',
    date: '2023-01-11T20:30:00Z',
    earningsDelta: -195.5,
    earningsPercentage: -2.516087516087516,
    netDeposits: 200.1,
    value: 204.7,
  },
  {
    currency: 'CAD',
    date: '2023-01-11T21:00:00Z',
    earningsDelta: -195.46,
    earningsPercentage: -2.5142783637766914,
    netDeposits: 200.1,
    value: 204.74,
  },
  {
    currency: 'CAD',
    date: '2023-01-12T14:30:00Z',
    earningsDelta: -195.69,
    earningsPercentage: -2.5247064894852276,
    netDeposits: 200.1,
    value: 204.51,
  },
  {
    currency: 'CAD',
    date: '2023-01-12T15:00:00Z',
    earningsDelta: -195.81,
    earningsPercentage: -2.530171856829048,
    netDeposits: 200.1,
    value: 204.39,
  },
  {
    currency: 'CAD',
    date: '2023-01-12T15:30:00Z',
    earningsDelta: -195.31,
    earningsPercentage: -2.5075105918603158,
    netDeposits: 200.1,
    value: 204.89,
  },
  {
    currency: 'CAD',
    date: '2023-01-12T16:00:00Z',
    earningsDelta: -195.93,
    earningsPercentage: -2.5356541995599846,
    netDeposits: 200.1,
    value: 204.27,
  },
  {
    currency: 'CAD',
    date: '2023-01-12T16:30:00Z',
    earningsDelta: -195.95,
    earningsPercentage: -2.536569579288026,
    netDeposits: 200.1,
    value: 204.25,
  },
  {
    currency: 'CAD',
    date: '2023-01-12T17:00:00Z',
    earningsDelta: -195.89,
    earningsPercentage: -2.5338248609494243,
    netDeposits: 200.1,
    value: 204.31,
  },
  {
    currency: 'CAD',
    date: '2023-01-12T17:30:00Z',
    earningsDelta: -195.69,
    earningsPercentage: -2.5247064894852276,
    netDeposits: 200.1,
    value: 204.51,
  },
  {
    currency: 'CAD',
    date: '2023-01-12T18:00:00Z',
    earningsDelta: -195.64,
    earningsPercentage: -2.522434244455905,
    netDeposits: 200.1,
    value: 204.56,
  },
  {
    currency: 'CAD',
    date: '2023-01-12T18:30:00Z',
    earningsDelta: -195.36,
    earningsPercentage: -2.5097636176772866,
    netDeposits: 200.1,
    value: 204.84,
  },
  {
    currency: 'CAD',
    date: '2023-01-12T19:00:00Z',
    earningsDelta: -195.28,
    earningsPercentage: -2.5061601642710474,
    netDeposits: 200.1,
    value: 204.92,
  },
  {
    currency: 'CAD',
    date: '2023-01-12T19:30:00Z',
    earningsDelta: -195.24,
    earningsPercentage: -2.504361210877373,
    netDeposits: 200.1,
    value: 204.96,
  },
  {
    currency: 'CAD',
    date: '2023-01-12T20:00:00Z',
    earningsDelta: -195.27,
    earningsPercentage: -2.505710252790966,
    netDeposits: 200.1,
    value: 204.93,
  },
  {
    currency: 'CAD',
    date: '2023-01-12T20:30:00Z',
    earningsDelta: -195.45,
    earningsPercentage: -2.5138263665594853,
    netDeposits: 200.1,
    value: 204.75,
  },
  {
    currency: 'CAD',
    date: '2023-01-12T21:00:00Z',
    earningsDelta: -195.34,
    earningsPercentage: -2.508862060107886,
    netDeposits: 200.1,
    value: 204.86,
  },
  {
    currency: 'CAD',
    date: '2023-01-13T14:30:00Z',
    earningsDelta: -200.62,
    earningsPercentage: -2.585975766950245,
    netDeposits: 205.1,
    value: 204.58,
  },
  {
    currency: 'CAD',
    date: '2023-01-13T15:00:00Z',
    earningsDelta: -200.04,
    earningsPercentage: -2.559365404298874,
    netDeposits: 205.1,
    value: 205.16,
  },
  {
    currency: 'CAD',
    date: '2023-01-13T15:30:00Z',
    earningsDelta: -199.95,
    earningsPercentage: -2.555271565495208,
    netDeposits: 205.1,
    value: 205.25,
  },
  {
    currency: 'CAD',
    date: '2023-01-13T16:00:00Z',
    earningsDelta: -199.69,
    earningsPercentage: -2.5434976436122785,
    netDeposits: 205.1,
    value: 205.51,
  },
  {
    currency: 'CAD',
    date: '2023-01-13T16:30:00Z',
    earningsDelta: -199.705,
    earningsPercentage: -2.5441747882030703,
    netDeposits: 205.1,
    value: 205.495,
  },
  {
    currency: 'CAD',
    date: '2023-01-13T17:00:00Z',
    earningsDelta: -199.8,
    earningsPercentage: -2.548469387755102,
    netDeposits: 205.1,
    value: 205.4,
  },
  {
    currency: 'CAD',
    date: '2023-01-13T17:30:00Z',
    earningsDelta: -199.88,
    earningsPercentage: -2.552093973442288,
    netDeposits: 205.1,
    value: 205.32,
  },
  {
    currency: 'CAD',
    date: '2023-01-13T18:00:00Z',
    earningsDelta: -199.91,
    earningsPercentage: -2.5534551028228383,
    netDeposits: 205.1,
    value: 205.29,
  },
  {
    currency: 'CAD',
    date: '2023-01-13T18:30:00Z',
    earningsDelta: -199.42,
    earningsPercentage: -2.5313531353135312,
    netDeposits: 205.1,
    value: 205.78,
  },
  {
    currency: 'CAD',
    date: '2023-01-13T19:00:00Z',
    earningsDelta: -199.16,
    earningsPercentage: -2.5197368421052633,
    netDeposits: 205.1,
    value: 206.04,
  },
  {
    currency: 'CAD',
    date: '2023-01-13T19:30:00Z',
    earningsDelta: -199.28,
    earningsPercentage: -2.525088697415104,
    netDeposits: 205.1,
    value: 205.92,
  },
  {
    currency: 'CAD',
    date: '2023-01-13T20:00:00Z',
    earningsDelta: -199.37,
    earningsPercentage: -2.5291132817455284,
    netDeposits: 205.1,
    value: 205.83,
  },
  {
    currency: 'CAD',
    date: '2023-01-13T20:30:00Z',
    earningsDelta: -199.15,
    earningsPercentage: -2.5192915876027833,
    netDeposits: 205.1,
    value: 206.05,
  },
  {
    currency: 'CAD',
    date: '2023-01-13T21:00:00Z',
    earningsDelta: -199.11,
    earningsPercentage: -2.5175116955367303,
    netDeposits: 205.1,
    value: 206.09,
  },
  {
    currency: 'CAD',
    date: '2023-01-16T14:30:00Z',
    earningsDelta: -198.79,
    earningsPercentage: -2.5033371111950635,
    netDeposits: 205.1,
    value: 206.41,
  },
  {
    currency: 'CAD',
    date: '2023-01-16T15:00:00Z',
    earningsDelta: -199,
    earningsPercentage: -2.378391299151428,
    netDeposits: 205.1,
    value: 206.2,
  },
  {
    currency: 'CAD',
    date: '2023-01-16T15:30:00Z',
    earningsDelta: -199.3,
    earningsPercentage: -2.3905481588101236,
    netDeposits: 205.1,
    value: 205.9,
  },
  {
    currency: 'CAD',
    date: '2023-01-16T16:00:00Z',
    earningsDelta: -198.95,
    earningsPercentage: -2.3763736263736264,
    netDeposits: 205.1,
    value: 206.25,
  },
  {
    currency: 'CAD',
    date: '2023-01-16T16:30:00Z',
    earningsDelta: -198.86,
    earningsPercentage: -2.372747882114306,
    netDeposits: 205.1,
    value: 206.34,
  },
  {
    currency: 'CAD',
    date: '2023-01-16T17:00:00Z',
    earningsDelta: -199.03,
    earningsPercentage: -2.3796030607364895,
    netDeposits: 205.1,
    value: 206.17,
  },
  {
    currency: 'CAD',
    date: '2023-01-16T17:30:00Z',
    earningsDelta: -198.78,
    earningsPercentage: -2.3695315293837167,
    netDeposits: 205.1,
    value: 206.42,
  },
  {
    currency: 'CAD',
    date: '2023-01-16T18:00:00Z',
    earningsDelta: -198.71,
    earningsPercentage: -2.3667222486898525,
    netDeposits: 205.1,
    value: 206.49,
  },
  {
    currency: 'CAD',
    date: '2023-01-16T18:30:00Z',
    earningsDelta: -198.795,
    earningsPercentage: -2.370134128166915,
    netDeposits: 205.1,
    value: 206.405,
  },
  {
    currency: 'CAD',
    date: '2023-01-16T19:00:00Z',
    earningsDelta: -199.08,
    earningsPercentage: -2.3816245962435696,
    netDeposits: 205.1,
    value: 206.12,
  },
  {
    currency: 'CAD',
    date: '2023-01-16T19:30:00Z',
    earningsDelta: -199.18,
    earningsPercentage: -2.3856749311294765,
    netDeposits: 205.1,
    value: 206.02,
  },
  {
    currency: 'CAD',
    date: '2023-01-16T20:00:00Z',
    earningsDelta: -198.97,
    earningsPercentage: -2.3771804062126645,
    netDeposits: 205.1,
    value: 206.23,
  },
  {
    currency: 'CAD',
    date: '2023-01-16T20:30:00Z',
    earningsDelta: -198.975,
    earningsPercentage: -2.3773821614194395,
    netDeposits: 205.1,
    value: 206.225,
  },
  {
    currency: 'CAD',
    date: '2023-01-16T21:00:00Z',
    earningsDelta: -198.99,
    earningsPercentage: -2.3779875717017207,
    netDeposits: 205.1,
    value: 206.21,
  },
  {
    currency: 'CAD',
    date: '2023-01-17T14:30:00Z',
    earningsDelta: -199.17,
    earningsPercentage: -2.3852694610778444,
    netDeposits: 205.1,
    value: 206.03,
  },
  {
    currency: 'CAD',
    date: '2023-01-17T15:00:00Z',
    earningsDelta: -199.785,
    earningsPercentage: -1.1613718936201134,
    netDeposits: 205.1,
    value: 205.415,
  },
  {
    currency: 'CAD',
    date: '2023-01-17T15:30:00Z',
    earningsDelta: -198.95,
    earningsPercentage: -1.150931389563809,
    netDeposits: 205.1,
    value: 206.25,
  },
  {
    currency: 'CAD',
    date: '2023-01-17T16:00:00Z',
    earningsDelta: -199.38,
    earningsPercentage: -1.1562953082410254,
    netDeposits: 205.1,
    value: 205.82,
  },
  {
    currency: 'CAD',
    date: '2023-01-17T16:30:00Z',
    earningsDelta: -199.63,
    earningsPercentage: -1.1594261819026601,
    netDeposits: 205.1,
    value: 205.57,
  },
  {
    currency: 'CAD',
    date: '2023-01-17T17:00:00Z',
    earningsDelta: -199.175,
    earningsPercentage: -1.1537347583050945,
    netDeposits: 205.1,
    value: 206.025,
  },
  {
    currency: 'CAD',
    date: '2023-01-17T17:30:00Z',
    earningsDelta: -199.075,
    earningsPercentage: -1.1524879150143283,
    netDeposits: 205.1,
    value: 206.125,
  },
  {
    currency: 'CAD',
    date: '2023-01-17T18:00:00Z',
    earningsDelta: -198.895,
    earningsPercentage: -1.150247231298615,
    netDeposits: 205.1,
    value: 206.305,
  },
  {
    currency: 'CAD',
    date: '2023-01-17T18:30:00Z',
    earningsDelta: -198.48,
    earningsPercentage: -1.1450989442104655,
    netDeposits: 205.1,
    value: 206.72,
  },
];

const data_1 = [];

for (let i = 0; i < raw_data_1.length; i++) {
  const raw_item = raw_data_1[i];

  const date = new Date(raw_item.date);

  data_1[i] = {
    date,
    value2: date.getDate(),
    value1: raw_item.value,
    value: raw_item.value,
    // value2: raw_item.netDeposits,
  };
}

// console.log(`data_1`, data_1);

export default data_1;