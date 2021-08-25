const AREA_CODES_US = {
  statesByCode: {
    // : '',
  },
  codesByState: {
    AK: [907],
    AL: [205, 251, 256, 334, 938],
    AR: [479, 501, 870],
    AZ: [480, 520, 602, 623, 928],
    CA: [
      209, 213, 310, 323, 408, 415, 424, 442, 510, 530, 559, 562, 619, 626, 628, 650, 657, 661, 669,
      707, 714, 747, 760, 805, 818, 831, 858, 909, 916, 925, 949, 951,
    ],
    CO: [303, 719, 720, 970],
    CT: [203, 475, 860, 959],
    DE: [302],
    FL: [239, 305, 321, 352, 386, 407, 561, 727, 754, 772, 786, 813, 850, 863, 904, 941, 954],
    GA: [229, 404, 470, 478, 678, 706, 762, 770, 912],
    HI: Havaí,
    IA: Iowa,
    ID: Idaho,
    IL: Illinois,
    IN: Indiana,
    KS: Kansas,
    KY: Kentucky,
    LA: Louisiana,
    MA: Massachusetts,
    MD: Maryland,
    ME: Maine,
    MI: Michigan,
    MN: Minnesota,
    MO: Missouri,
    MS: Mississippi,
    MT: Montana,
    NC: Carolina do Norte,
    ND: Dakota do Norte,
    NE: Nebraska,
    NH: Nova Hampshire,
    NJ: Nova Jérsei,
    NM: Novo México,
    NV: Nevada,
    NY: Nova Iorque,
    OH: Ohio,
    OK: Oklahoma,
    OR: Oregon,
    PA: Pensilvânia,
    RI: Rhode Island,
    SC: Carolina do Sul,
    SD: Dakota do Sul,
    TN: Tennessee,
    TX: Texas,
    UT: Utah,
    VT: Vermont,
    VA: Virgínia,
    WA: Washington,
    WI: Wisconsin,
    WV: Virgínia Ocidental,
    WY: Wyoming,
    // <tr>
    //   <td>Hawaii</td>
    //   <td>808</td>
    // </tr>
    // <tr>
    //   <td>Idaho</td>
    //   <td>208</td>
    // </tr>
    // <tr>
    //   <td>Illinois</td>
    //   <td>217, 224, 309, 312, 331, 618, 630, 708, 773, 779, 815, 847, 872</td>
    // </tr>
    // <tr>
    //   <td>Indiana</td>
    //   <td>219, 260, 317, 463, 574, 765, 812, 930</td>
    // </tr>
    // <tr>
    //   <td>Iowa</td>
    //   <td>319, 515, 563, 641, 712</td>
    // </tr>
    // <tr>
    //   <td>Kansas</td>
    //   <td>316, 620, 785, 913</td>
    // </tr>
    // <tr>
    //   <td>Kentucky</td>
    //   <td>270, 364, 502, 606, 859</td>
    // </tr>
    // <tr>
    //   <td>Louisiana</td>
    //   <td>225, 318, 337, 504, 985</td>
    // </tr>
    // <tr>
    //   <td>Maine</td>
    //   <td>207</td>
    // </tr>
    // <tr>
    //   <td>Maryland</td>
    //   <td>240, 301, 410, 443, 667</td>
    // </tr>
    // <tr>
    //   <td>Massachusetts</td>
    //   <td>339, 351, 413, 508, 617, 774, 781, 857, 978</td>
    // </tr>
    // <tr>
    //   <td>Michigan</td>
    //   <td>231, 248, 269, 313, 517, 586, 616, 734, 810, 906, 947, 989</td>
    // </tr>
    // <tr>
    //   <td>Minnesota</td>
    //   <td>218, 320, 507, 612, 651, 763, 952</td>
    // </tr>
    // <tr>
    //   <td>Mississippi</td>
    //   <td>228, 601, 662, 769</td>
    // </tr>
    // <tr>
    //   <td>Missouri</td>
    //   <td>314, 417, 573, 636, 660, 816</td>
    // </tr>
    // <tr>
    //   <td>Montana</td>
    //   <td>406</td>
    // </tr>
    // <tr>
    //   <td>Nebraska</td>
    //   <td>308, 402, 531</td>
    // </tr>
    // <tr>
    //   <td>Nevada</td>
    //   <td>702, 725, 775</td>
    // </tr>
    // <tr>
    //   <td>New Hampshire</td>
    //   <td>603</td>
    // </tr>
    // <tr>
    //   <td>New Jersey</td>
    //   <td>201, 551, 609, 732, 848, 856, 862, 908, 973</td>
    // </tr>
    // <tr>
    //   <td>New Mexico</td>
    //   <td>505, 575</td>
    // </tr>
    // <tr>
    //   <td>New York</td>
    //   <td>
    //     212, 315, 332, 347, 516, 518, 585, 607, 631, 646, 680, 716, 718, 845, 914, 917, 929, 934
    //   </td>
    // </tr>
    // <tr>
    //   <td>North Carolina</td>
    //   <td>252, 336, 704, 743, 828, 910, 919, 980, 984</td>
    // </tr>
    // <tr>
    //   <td>North Dakota</td>
    //   <td>701</td>
    // </tr>
    // <tr>
    //   <td>Ohio</td>
    //   <td>216, 220, 234, 330, 380, 419, 440, 513, 567, 614, 740, 937</td>
    // </tr>
    // <tr>
    //   <td>Oklahoma</td>
    //   <td>405, 539, 580, 918</td>
    // </tr>
    // <tr>
    //   <td>Oregon</td>
    //   <td>458, 503, 541, 971</td>
    // </tr>
    // <tr>
    //   <td>Pennsylvania</td>
    //   <td>215, 267, 272, 412, 484, 570, 610, 717, 724, 814, 878</td>
    // </tr>
    // <tr>
    //   <td>Rhode Island</td>
    //   <td>401</td>
    // </tr>
    // <tr>
    //   <td>South Carolina</td>
    //   <td>803, 843, 854, 864</td>
    // </tr>
    // <tr>
    //   <td>South Dakota</td>
    //   <td>605</td>
    // </tr>
    // <tr>
    //   <td>Tennessee</td>
    //   <td>423, 615, 629, 731, 865, 901, 931</td>
    // </tr>
    // <tr>
    //   <td>Texas</td>
    //   <td>
    //     210, 214, 254, 281, 325, 346, 361, 409, 430, 432, 469, 512, 682, 713, 737, 806, 817, 830,
    //     832, 903, 915, 936, 940, 956, 972, 979
    //   </td>
    // </tr>
    // <tr>
    //   <td>Utah</td>
    //   <td>385, 435, 801</td>
    // </tr>
    // <tr>
    //   <td>Vermont</td>
    //   <td>802</td>
    // </tr>
    // <tr>
    //   <td>Virginia</td>
    //   <td>276, 434, 540, 571, 703, 757, 804</td>
    // </tr>
    // <tr>
    //   <td>Washington</td>
    //   <td>206, 253, 360, 425, 509</td>
    // </tr>
    // <tr>
    //   <td>Washington, DC</td>
    //   <td>202</td>
    // </tr>
    // <tr>
    //   <td>West Virginia</td>
    //   <td>304, 681</td>
    // </tr>
    // <tr>
    //   <td>Wisconsin</td>
    //   <td>262, 414, 534, 608, 715, 920</td>
    // </tr>
    // <tr>
    //   <td>Wyoming</td>
    //   <td>307</td>
    // </tr>
  },
  codesByTerritory: {
    AS: [684],
    GU: [671],
    MP: [670],
    PR: [787, 939],
    VI: [340],
  },
};

export default AREA_CODES_US;
