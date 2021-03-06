// layout is an array of objects
export const userLayouts = {
  lg: [
    { i: "nodes", x: 0, y: 0, w: 2, h: 2, minH: 1, minW: 2, maxW: 2 },
    { i: "hasher", x: 5, y: 2, w: 2, h: 2, minW: 2, maxW: 2 },
    { i: "wallet", x: 0, y: 1, w: 2, h: 4 },
    { i: "signature", x: 2, y: 0, w: 3, h: 2 },
    { i: "unspentTx", x: 2, y: 2, w: 3, h: 2 },
    { i: "merkl", x: 7, y: 2, w: 2, h: 2 },
    { i: "mempool", x: 2, y: 6, w: 7, h: 2 },
    { i: "blockchain", x: 5, y: 0, w: 4, h: 2 },
    { i: "block", x: 9, y: 0, w: 3, h: 6 }
  ],
  md: [
    { i: "nodes", x: 0, y: 0, w: 3, h: 6 },
    { i: "hasher", x: 0, y: 3, w: 3, h: 6 },
    { i: "wallet", x: 0, y: 6, w: 3, h: 6 },
    { i: "signature", x: 3, y: 0, w: 3, h: 6 },
    { i: "unspentTx", x: 3, y: 6, w: 6, h: 6 },
    { i: "mempool", x: 3, y: 3, w: 6, h: 6 },
    { i: "blockchain", x: 6, y: 0, w: 3, h: 6 },
    { i: "block", x: 9, y: 0, w: 3, h: 12 }
  ],
  sm: [
    { i: "nodes", x: 0, y: 0, w: 3, h: 6 },
    { i: "hasher", x: 0, y: 3, w: 3, h: 6 },
    { i: "wallet", x: 0, y: 6, w: 3, h: 6 },
    { i: "signature", x: 3, y: 0, w: 3, h: 6 },
    { i: "unspentTx", x: 3, y: 6, w: 6, h: 6 },
    { i: "mempool", x: 3, y: 3, w: 6, h: 6 },
    { i: "blockchain", x: 6, y: 0, w: 3, h: 6 },
    { i: "block", x: 9, y: 0, w: 3, h: 12 }
  ],
  xs: [
    { i: "nodes", x: 0, y: 0, w: 3, h: 6 },
    { i: "hasher", x: 0, y: 6, w: 3, h: 6 },
    { i: "wallet", x: 0, y: 12, w: 3, h: 6 },
    { i: "signature", x: 0, y: 18, w: 3, h: 6 },
    { i: "unspentTx", x: 0, y: 24, w: 6, h: 6 },
    { i: "mempool", x: 0, y: 30, w: 6, h: 6 },
    { i: "blockchain", x: 0, y: 36, w: 3, h: 6 },
    { i: "block", x: 0, y: 42, w: 3, h: 12 }
  ],
  xxs: [
    { i: "nodes", x: 0, y: 0, w: 3, h: 6 },
    { i: "hasher", x: 0, y: 3, w: 3, h: 6 },
    { i: "wallet", x: 0, y: 6, w: 3, h: 6 },
    { i: "signature", x: 0, y: 9, w: 3, h: 6 },
    { i: "unspentTx", x: 0, y: 12, w: 6, h: 6 },
    { i: "mempool", x: 0, y: 15, w: 6, h: 6 },
    { i: "blockchain", x: 0, y: 18, w: 3, h: 6 },
    { i: "block", x: 0, y: 21, w: 3, h: 12 }
  ]
};

export const adminLayouts = {
  lg: [
    { i: "blockchain", x: 0, y: 0, w: 9, h: 6 },
    { i: "block", x: 9, y: 0, w: 3, h: 6 }
  ],
  md: [
    { i: "blockchain", x: 6, y: 0, w: 3, h: 6 },
    { i: "block", x: 9, y: 0, w: 3, h: 12 }
  ],
  sm: [
    { i: "blockchain", x: 6, y: 0, w: 3, h: 6 },
    { i: "block", x: 9, y: 0, w: 3, h: 12 }
  ],
  xs: [
    { i: "blockchain", x: 0, y: 36, w: 3, h: 6 },
    { i: "block", x: 0, y: 42, w: 3, h: 12 }
  ],
  xxs: [
    { i: "blockchain", x: 0, y: 18, w: 3, h: 6 },
    { i: "block", x: 0, y: 21, w: 3, h: 12 }
  ]
};

export const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
export const cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };
