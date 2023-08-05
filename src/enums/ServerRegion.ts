// eff0f5a41304bded1f7286c921a66947e3f5a6243d55c8aa3316582983edef87f61a7254897d7d607863371538269eb6c364273f76a877d09b204da66e945c2d  scripts/regions.txt
// not much value writing automation to extract this info. It can be extracted via:
// vpk game/dota/pak01_dir.vpk -f 'scripts/regions.txt' -p

export enum ServerRegion {
    Unspecified = 0,
    USWest = 1,
    USEast = 2,
    Europe = 3, // EU West
    Korea = 4, // not in game files (?)
    Singapore = 5,
    Dubai = 6,
    PerfectWorldTelecom = 12, // china
    PerfectWorldTelecomGuangdong = 17,
    PerfectWorldTelecomZhejiang = 18,
    PerfectWorldTelecomWuhan = 20,
    PerfectWorldUnicom = 13,
    PerfectWorldUnicomTianjin = 25,
    Stockholm = 8,  // Russia
    Brazil = 10,
    Austria = 9,  // EU East
    Australia = 7,
    SouthAfrica = 11,
    Chile = 14,
    Peru = 15,
    Argentina = 38,
    India = 16,
    Japan = 19,
    Taiwan = 37,
}
