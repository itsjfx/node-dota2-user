/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { FantasyRoles, fantasyRolesFromJSON, fantasyRolesToJSON } from "./dota_shared_enums";

export enum DOTA2013PassportSelectionIndices {
  PP13_SEL_ALLSTAR_PLAYER_0 = 0,
  PP13_SEL_ALLSTAR_PLAYER_1 = 1,
  PP13_SEL_ALLSTAR_PLAYER_2 = 2,
  PP13_SEL_ALLSTAR_PLAYER_3 = 3,
  PP13_SEL_ALLSTAR_PLAYER_4 = 4,
  PP13_SEL_ALLSTAR_PLAYER_5 = 5,
  PP13_SEL_ALLSTAR_PLAYER_6 = 6,
  PP13_SEL_ALLSTAR_PLAYER_7 = 7,
  PP13_SEL_ALLSTAR_PLAYER_8 = 8,
  PP13_SEL_ALLSTAR_PLAYER_9 = 9,
  PP13_SEL_QUALPRED_WEST_0 = 10,
  PP13_SEL_QUALPRED_WEST_1 = 11,
  PP13_SEL_QUALPRED_WEST_2 = 12,
  PP13_SEL_QUALPRED_WEST_3 = 13,
  PP13_SEL_QUALPRED_WEST_4 = 14,
  PP13_SEL_QUALPRED_WEST_5 = 15,
  PP13_SEL_QUALPRED_WEST_6 = 16,
  PP13_SEL_QUALPRED_WEST_7 = 17,
  PP13_SEL_QUALPRED_WEST_8 = 18,
  PP13_SEL_QUALPRED_WEST_9 = 19,
  PP13_SEL_QUALPRED_WEST_10 = 20,
  PP13_SEL_QUALPRED_WEST_11 = 21,
  PP13_SEL_QUALPRED_WEST_12 = 22,
  PP13_SEL_QUALPRED_WEST_13 = 23,
  PP13_SEL_QUALPRED_WEST_14 = 24,
  PP13_SEL_QUALPRED_EAST_0 = 25,
  PP13_SEL_QUALPRED_EAST_1 = 26,
  PP13_SEL_QUALPRED_EAST_2 = 27,
  PP13_SEL_QUALPRED_EAST_3 = 28,
  PP13_SEL_QUALPRED_EAST_4 = 29,
  PP13_SEL_QUALPRED_EAST_5 = 30,
  PP13_SEL_QUALPRED_EAST_6 = 31,
  PP13_SEL_QUALPRED_EAST_7 = 32,
  PP13_SEL_QUALPRED_EAST_8 = 33,
  PP13_SEL_QUALPRED_EAST_9 = 34,
  PP13_SEL_QUALPRED_EAST_10 = 35,
  PP13_SEL_QUALPRED_EAST_11 = 36,
  PP13_SEL_QUALPRED_EAST_12 = 37,
  PP13_SEL_QUALPRED_EAST_13 = 38,
  PP13_SEL_QUALPRED_EAST_14 = 39,
  PP13_SEL_TEAMCUP_TEAM = 40,
  PP13_SEL_TEAMCUP_PLAYER = 41,
  PP13_SEL_TEAMCUP_TEAM_LOCK = 42,
  PP13_SEL_TEAMCUP_PLAYER_LOCK = 43,
  PP13_SEL_EVENTPRED_0 = 44,
  PP13_SEL_EVENTPRED_1 = 45,
  PP13_SEL_EVENTPRED_2 = 46,
  PP13_SEL_EVENTPRED_3 = 47,
  PP13_SEL_EVENTPRED_4 = 48,
  PP13_SEL_EVENTPRED_5 = 49,
  PP13_SEL_EVENTPRED_6 = 50,
  PP13_SEL_EVENTPRED_7 = 51,
  PP13_SEL_EVENTPRED_8 = 52,
  PP13_SEL_EVENTPRED_9 = 53,
  PP13_SEL_EVENTPRED_10 = 54,
  PP13_SEL_EVENTPRED_11 = 55,
  PP13_SEL_EVENTPRED_12 = 56,
  PP13_SEL_EVENTPRED_13 = 57,
  PP13_SEL_EVENTPRED_14 = 58,
  PP13_SEL_EVENTPRED_15 = 59,
  PP13_SEL_EVENTPRED_16 = 60,
  PP13_SEL_EVENTPRED_17 = 61,
  PP13_SEL_EVENTPRED_18 = 62,
  PP13_SEL_EVENTPRED_19 = 63,
  PP13_SEL_EVENTPRED_20 = 64,
  PP13_SEL_EVENTPRED_21 = 65,
  PP13_SEL_EVENTPRED_22 = 66,
  PP13_SEL_EVENTPRED_23 = 67,
  PP13_SEL_EVENTPRED_24 = 68,
  PP13_SEL_EVENTPRED_25 = 69,
  PP13_SEL_EVENTPRED_26 = 70,
  PP13_SEL_EVENTPRED_27 = 71,
  PP13_SEL_EVENTPRED_28 = 72,
  PP13_SEL_EVENTPRED_29 = 73,
  PP13_SEL_EVENTPRED_30 = 74,
  PP13_SEL_EVENTPRED_31 = 75,
  PP13_SEL_EVENTPRED_32 = 76,
  PP13_SEL_EVENTPRED_33 = 77,
  PP13_SEL_EVENTPRED_34 = 78,
  PP13_SEL_EVENTPRED_35 = 79,
  PP13_SEL_EVENTPRED_36 = 80,
  PP13_SEL_EVENTPRED_37 = 81,
  PP13_SEL_EVENTPRED_38 = 82,
  PP13_SEL_EVENTPRED_39 = 83,
  PP13_SEL_EVENTPRED_40 = 84,
  PP13_SEL_EVENTPRED_41 = 85,
  PP13_SEL_EVENTPRED_42 = 86,
  PP13_SEL_EVENTPRED_43 = 87,
  PP13_SEL_SOLO_0 = 88,
  PP13_SEL_SOLO_1 = 89,
  PP13_SEL_SOLO_2 = 90,
  PP13_SEL_SOLO_3 = 91,
  PP13_SEL_SOLO_4 = 92,
  PP13_SEL_SOLO_5 = 93,
  PP13_SEL_SOLO_6 = 94,
  PP13_SEL_SOLO_7 = 95,
}

export function dOTA2013PassportSelectionIndicesFromJSON(object: any): DOTA2013PassportSelectionIndices {
  switch (object) {
    case 0:
    case "PP13_SEL_ALLSTAR_PLAYER_0":
      return DOTA2013PassportSelectionIndices.PP13_SEL_ALLSTAR_PLAYER_0;
    case 1:
    case "PP13_SEL_ALLSTAR_PLAYER_1":
      return DOTA2013PassportSelectionIndices.PP13_SEL_ALLSTAR_PLAYER_1;
    case 2:
    case "PP13_SEL_ALLSTAR_PLAYER_2":
      return DOTA2013PassportSelectionIndices.PP13_SEL_ALLSTAR_PLAYER_2;
    case 3:
    case "PP13_SEL_ALLSTAR_PLAYER_3":
      return DOTA2013PassportSelectionIndices.PP13_SEL_ALLSTAR_PLAYER_3;
    case 4:
    case "PP13_SEL_ALLSTAR_PLAYER_4":
      return DOTA2013PassportSelectionIndices.PP13_SEL_ALLSTAR_PLAYER_4;
    case 5:
    case "PP13_SEL_ALLSTAR_PLAYER_5":
      return DOTA2013PassportSelectionIndices.PP13_SEL_ALLSTAR_PLAYER_5;
    case 6:
    case "PP13_SEL_ALLSTAR_PLAYER_6":
      return DOTA2013PassportSelectionIndices.PP13_SEL_ALLSTAR_PLAYER_6;
    case 7:
    case "PP13_SEL_ALLSTAR_PLAYER_7":
      return DOTA2013PassportSelectionIndices.PP13_SEL_ALLSTAR_PLAYER_7;
    case 8:
    case "PP13_SEL_ALLSTAR_PLAYER_8":
      return DOTA2013PassportSelectionIndices.PP13_SEL_ALLSTAR_PLAYER_8;
    case 9:
    case "PP13_SEL_ALLSTAR_PLAYER_9":
      return DOTA2013PassportSelectionIndices.PP13_SEL_ALLSTAR_PLAYER_9;
    case 10:
    case "PP13_SEL_QUALPRED_WEST_0":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_0;
    case 11:
    case "PP13_SEL_QUALPRED_WEST_1":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_1;
    case 12:
    case "PP13_SEL_QUALPRED_WEST_2":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_2;
    case 13:
    case "PP13_SEL_QUALPRED_WEST_3":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_3;
    case 14:
    case "PP13_SEL_QUALPRED_WEST_4":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_4;
    case 15:
    case "PP13_SEL_QUALPRED_WEST_5":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_5;
    case 16:
    case "PP13_SEL_QUALPRED_WEST_6":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_6;
    case 17:
    case "PP13_SEL_QUALPRED_WEST_7":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_7;
    case 18:
    case "PP13_SEL_QUALPRED_WEST_8":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_8;
    case 19:
    case "PP13_SEL_QUALPRED_WEST_9":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_9;
    case 20:
    case "PP13_SEL_QUALPRED_WEST_10":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_10;
    case 21:
    case "PP13_SEL_QUALPRED_WEST_11":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_11;
    case 22:
    case "PP13_SEL_QUALPRED_WEST_12":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_12;
    case 23:
    case "PP13_SEL_QUALPRED_WEST_13":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_13;
    case 24:
    case "PP13_SEL_QUALPRED_WEST_14":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_14;
    case 25:
    case "PP13_SEL_QUALPRED_EAST_0":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_0;
    case 26:
    case "PP13_SEL_QUALPRED_EAST_1":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_1;
    case 27:
    case "PP13_SEL_QUALPRED_EAST_2":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_2;
    case 28:
    case "PP13_SEL_QUALPRED_EAST_3":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_3;
    case 29:
    case "PP13_SEL_QUALPRED_EAST_4":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_4;
    case 30:
    case "PP13_SEL_QUALPRED_EAST_5":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_5;
    case 31:
    case "PP13_SEL_QUALPRED_EAST_6":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_6;
    case 32:
    case "PP13_SEL_QUALPRED_EAST_7":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_7;
    case 33:
    case "PP13_SEL_QUALPRED_EAST_8":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_8;
    case 34:
    case "PP13_SEL_QUALPRED_EAST_9":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_9;
    case 35:
    case "PP13_SEL_QUALPRED_EAST_10":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_10;
    case 36:
    case "PP13_SEL_QUALPRED_EAST_11":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_11;
    case 37:
    case "PP13_SEL_QUALPRED_EAST_12":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_12;
    case 38:
    case "PP13_SEL_QUALPRED_EAST_13":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_13;
    case 39:
    case "PP13_SEL_QUALPRED_EAST_14":
      return DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_14;
    case 40:
    case "PP13_SEL_TEAMCUP_TEAM":
      return DOTA2013PassportSelectionIndices.PP13_SEL_TEAMCUP_TEAM;
    case 41:
    case "PP13_SEL_TEAMCUP_PLAYER":
      return DOTA2013PassportSelectionIndices.PP13_SEL_TEAMCUP_PLAYER;
    case 42:
    case "PP13_SEL_TEAMCUP_TEAM_LOCK":
      return DOTA2013PassportSelectionIndices.PP13_SEL_TEAMCUP_TEAM_LOCK;
    case 43:
    case "PP13_SEL_TEAMCUP_PLAYER_LOCK":
      return DOTA2013PassportSelectionIndices.PP13_SEL_TEAMCUP_PLAYER_LOCK;
    case 44:
    case "PP13_SEL_EVENTPRED_0":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_0;
    case 45:
    case "PP13_SEL_EVENTPRED_1":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_1;
    case 46:
    case "PP13_SEL_EVENTPRED_2":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_2;
    case 47:
    case "PP13_SEL_EVENTPRED_3":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_3;
    case 48:
    case "PP13_SEL_EVENTPRED_4":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_4;
    case 49:
    case "PP13_SEL_EVENTPRED_5":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_5;
    case 50:
    case "PP13_SEL_EVENTPRED_6":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_6;
    case 51:
    case "PP13_SEL_EVENTPRED_7":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_7;
    case 52:
    case "PP13_SEL_EVENTPRED_8":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_8;
    case 53:
    case "PP13_SEL_EVENTPRED_9":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_9;
    case 54:
    case "PP13_SEL_EVENTPRED_10":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_10;
    case 55:
    case "PP13_SEL_EVENTPRED_11":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_11;
    case 56:
    case "PP13_SEL_EVENTPRED_12":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_12;
    case 57:
    case "PP13_SEL_EVENTPRED_13":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_13;
    case 58:
    case "PP13_SEL_EVENTPRED_14":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_14;
    case 59:
    case "PP13_SEL_EVENTPRED_15":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_15;
    case 60:
    case "PP13_SEL_EVENTPRED_16":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_16;
    case 61:
    case "PP13_SEL_EVENTPRED_17":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_17;
    case 62:
    case "PP13_SEL_EVENTPRED_18":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_18;
    case 63:
    case "PP13_SEL_EVENTPRED_19":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_19;
    case 64:
    case "PP13_SEL_EVENTPRED_20":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_20;
    case 65:
    case "PP13_SEL_EVENTPRED_21":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_21;
    case 66:
    case "PP13_SEL_EVENTPRED_22":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_22;
    case 67:
    case "PP13_SEL_EVENTPRED_23":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_23;
    case 68:
    case "PP13_SEL_EVENTPRED_24":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_24;
    case 69:
    case "PP13_SEL_EVENTPRED_25":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_25;
    case 70:
    case "PP13_SEL_EVENTPRED_26":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_26;
    case 71:
    case "PP13_SEL_EVENTPRED_27":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_27;
    case 72:
    case "PP13_SEL_EVENTPRED_28":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_28;
    case 73:
    case "PP13_SEL_EVENTPRED_29":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_29;
    case 74:
    case "PP13_SEL_EVENTPRED_30":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_30;
    case 75:
    case "PP13_SEL_EVENTPRED_31":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_31;
    case 76:
    case "PP13_SEL_EVENTPRED_32":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_32;
    case 77:
    case "PP13_SEL_EVENTPRED_33":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_33;
    case 78:
    case "PP13_SEL_EVENTPRED_34":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_34;
    case 79:
    case "PP13_SEL_EVENTPRED_35":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_35;
    case 80:
    case "PP13_SEL_EVENTPRED_36":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_36;
    case 81:
    case "PP13_SEL_EVENTPRED_37":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_37;
    case 82:
    case "PP13_SEL_EVENTPRED_38":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_38;
    case 83:
    case "PP13_SEL_EVENTPRED_39":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_39;
    case 84:
    case "PP13_SEL_EVENTPRED_40":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_40;
    case 85:
    case "PP13_SEL_EVENTPRED_41":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_41;
    case 86:
    case "PP13_SEL_EVENTPRED_42":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_42;
    case 87:
    case "PP13_SEL_EVENTPRED_43":
      return DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_43;
    case 88:
    case "PP13_SEL_SOLO_0":
      return DOTA2013PassportSelectionIndices.PP13_SEL_SOLO_0;
    case 89:
    case "PP13_SEL_SOLO_1":
      return DOTA2013PassportSelectionIndices.PP13_SEL_SOLO_1;
    case 90:
    case "PP13_SEL_SOLO_2":
      return DOTA2013PassportSelectionIndices.PP13_SEL_SOLO_2;
    case 91:
    case "PP13_SEL_SOLO_3":
      return DOTA2013PassportSelectionIndices.PP13_SEL_SOLO_3;
    case 92:
    case "PP13_SEL_SOLO_4":
      return DOTA2013PassportSelectionIndices.PP13_SEL_SOLO_4;
    case 93:
    case "PP13_SEL_SOLO_5":
      return DOTA2013PassportSelectionIndices.PP13_SEL_SOLO_5;
    case 94:
    case "PP13_SEL_SOLO_6":
      return DOTA2013PassportSelectionIndices.PP13_SEL_SOLO_6;
    case 95:
    case "PP13_SEL_SOLO_7":
      return DOTA2013PassportSelectionIndices.PP13_SEL_SOLO_7;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum DOTA2013PassportSelectionIndices",
      );
  }
}

export function dOTA2013PassportSelectionIndicesToJSON(object: DOTA2013PassportSelectionIndices): string {
  switch (object) {
    case DOTA2013PassportSelectionIndices.PP13_SEL_ALLSTAR_PLAYER_0:
      return "PP13_SEL_ALLSTAR_PLAYER_0";
    case DOTA2013PassportSelectionIndices.PP13_SEL_ALLSTAR_PLAYER_1:
      return "PP13_SEL_ALLSTAR_PLAYER_1";
    case DOTA2013PassportSelectionIndices.PP13_SEL_ALLSTAR_PLAYER_2:
      return "PP13_SEL_ALLSTAR_PLAYER_2";
    case DOTA2013PassportSelectionIndices.PP13_SEL_ALLSTAR_PLAYER_3:
      return "PP13_SEL_ALLSTAR_PLAYER_3";
    case DOTA2013PassportSelectionIndices.PP13_SEL_ALLSTAR_PLAYER_4:
      return "PP13_SEL_ALLSTAR_PLAYER_4";
    case DOTA2013PassportSelectionIndices.PP13_SEL_ALLSTAR_PLAYER_5:
      return "PP13_SEL_ALLSTAR_PLAYER_5";
    case DOTA2013PassportSelectionIndices.PP13_SEL_ALLSTAR_PLAYER_6:
      return "PP13_SEL_ALLSTAR_PLAYER_6";
    case DOTA2013PassportSelectionIndices.PP13_SEL_ALLSTAR_PLAYER_7:
      return "PP13_SEL_ALLSTAR_PLAYER_7";
    case DOTA2013PassportSelectionIndices.PP13_SEL_ALLSTAR_PLAYER_8:
      return "PP13_SEL_ALLSTAR_PLAYER_8";
    case DOTA2013PassportSelectionIndices.PP13_SEL_ALLSTAR_PLAYER_9:
      return "PP13_SEL_ALLSTAR_PLAYER_9";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_0:
      return "PP13_SEL_QUALPRED_WEST_0";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_1:
      return "PP13_SEL_QUALPRED_WEST_1";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_2:
      return "PP13_SEL_QUALPRED_WEST_2";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_3:
      return "PP13_SEL_QUALPRED_WEST_3";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_4:
      return "PP13_SEL_QUALPRED_WEST_4";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_5:
      return "PP13_SEL_QUALPRED_WEST_5";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_6:
      return "PP13_SEL_QUALPRED_WEST_6";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_7:
      return "PP13_SEL_QUALPRED_WEST_7";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_8:
      return "PP13_SEL_QUALPRED_WEST_8";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_9:
      return "PP13_SEL_QUALPRED_WEST_9";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_10:
      return "PP13_SEL_QUALPRED_WEST_10";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_11:
      return "PP13_SEL_QUALPRED_WEST_11";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_12:
      return "PP13_SEL_QUALPRED_WEST_12";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_13:
      return "PP13_SEL_QUALPRED_WEST_13";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_WEST_14:
      return "PP13_SEL_QUALPRED_WEST_14";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_0:
      return "PP13_SEL_QUALPRED_EAST_0";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_1:
      return "PP13_SEL_QUALPRED_EAST_1";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_2:
      return "PP13_SEL_QUALPRED_EAST_2";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_3:
      return "PP13_SEL_QUALPRED_EAST_3";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_4:
      return "PP13_SEL_QUALPRED_EAST_4";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_5:
      return "PP13_SEL_QUALPRED_EAST_5";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_6:
      return "PP13_SEL_QUALPRED_EAST_6";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_7:
      return "PP13_SEL_QUALPRED_EAST_7";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_8:
      return "PP13_SEL_QUALPRED_EAST_8";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_9:
      return "PP13_SEL_QUALPRED_EAST_9";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_10:
      return "PP13_SEL_QUALPRED_EAST_10";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_11:
      return "PP13_SEL_QUALPRED_EAST_11";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_12:
      return "PP13_SEL_QUALPRED_EAST_12";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_13:
      return "PP13_SEL_QUALPRED_EAST_13";
    case DOTA2013PassportSelectionIndices.PP13_SEL_QUALPRED_EAST_14:
      return "PP13_SEL_QUALPRED_EAST_14";
    case DOTA2013PassportSelectionIndices.PP13_SEL_TEAMCUP_TEAM:
      return "PP13_SEL_TEAMCUP_TEAM";
    case DOTA2013PassportSelectionIndices.PP13_SEL_TEAMCUP_PLAYER:
      return "PP13_SEL_TEAMCUP_PLAYER";
    case DOTA2013PassportSelectionIndices.PP13_SEL_TEAMCUP_TEAM_LOCK:
      return "PP13_SEL_TEAMCUP_TEAM_LOCK";
    case DOTA2013PassportSelectionIndices.PP13_SEL_TEAMCUP_PLAYER_LOCK:
      return "PP13_SEL_TEAMCUP_PLAYER_LOCK";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_0:
      return "PP13_SEL_EVENTPRED_0";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_1:
      return "PP13_SEL_EVENTPRED_1";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_2:
      return "PP13_SEL_EVENTPRED_2";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_3:
      return "PP13_SEL_EVENTPRED_3";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_4:
      return "PP13_SEL_EVENTPRED_4";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_5:
      return "PP13_SEL_EVENTPRED_5";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_6:
      return "PP13_SEL_EVENTPRED_6";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_7:
      return "PP13_SEL_EVENTPRED_7";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_8:
      return "PP13_SEL_EVENTPRED_8";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_9:
      return "PP13_SEL_EVENTPRED_9";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_10:
      return "PP13_SEL_EVENTPRED_10";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_11:
      return "PP13_SEL_EVENTPRED_11";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_12:
      return "PP13_SEL_EVENTPRED_12";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_13:
      return "PP13_SEL_EVENTPRED_13";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_14:
      return "PP13_SEL_EVENTPRED_14";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_15:
      return "PP13_SEL_EVENTPRED_15";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_16:
      return "PP13_SEL_EVENTPRED_16";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_17:
      return "PP13_SEL_EVENTPRED_17";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_18:
      return "PP13_SEL_EVENTPRED_18";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_19:
      return "PP13_SEL_EVENTPRED_19";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_20:
      return "PP13_SEL_EVENTPRED_20";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_21:
      return "PP13_SEL_EVENTPRED_21";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_22:
      return "PP13_SEL_EVENTPRED_22";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_23:
      return "PP13_SEL_EVENTPRED_23";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_24:
      return "PP13_SEL_EVENTPRED_24";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_25:
      return "PP13_SEL_EVENTPRED_25";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_26:
      return "PP13_SEL_EVENTPRED_26";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_27:
      return "PP13_SEL_EVENTPRED_27";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_28:
      return "PP13_SEL_EVENTPRED_28";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_29:
      return "PP13_SEL_EVENTPRED_29";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_30:
      return "PP13_SEL_EVENTPRED_30";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_31:
      return "PP13_SEL_EVENTPRED_31";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_32:
      return "PP13_SEL_EVENTPRED_32";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_33:
      return "PP13_SEL_EVENTPRED_33";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_34:
      return "PP13_SEL_EVENTPRED_34";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_35:
      return "PP13_SEL_EVENTPRED_35";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_36:
      return "PP13_SEL_EVENTPRED_36";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_37:
      return "PP13_SEL_EVENTPRED_37";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_38:
      return "PP13_SEL_EVENTPRED_38";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_39:
      return "PP13_SEL_EVENTPRED_39";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_40:
      return "PP13_SEL_EVENTPRED_40";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_41:
      return "PP13_SEL_EVENTPRED_41";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_42:
      return "PP13_SEL_EVENTPRED_42";
    case DOTA2013PassportSelectionIndices.PP13_SEL_EVENTPRED_43:
      return "PP13_SEL_EVENTPRED_43";
    case DOTA2013PassportSelectionIndices.PP13_SEL_SOLO_0:
      return "PP13_SEL_SOLO_0";
    case DOTA2013PassportSelectionIndices.PP13_SEL_SOLO_1:
      return "PP13_SEL_SOLO_1";
    case DOTA2013PassportSelectionIndices.PP13_SEL_SOLO_2:
      return "PP13_SEL_SOLO_2";
    case DOTA2013PassportSelectionIndices.PP13_SEL_SOLO_3:
      return "PP13_SEL_SOLO_3";
    case DOTA2013PassportSelectionIndices.PP13_SEL_SOLO_4:
      return "PP13_SEL_SOLO_4";
    case DOTA2013PassportSelectionIndices.PP13_SEL_SOLO_5:
      return "PP13_SEL_SOLO_5";
    case DOTA2013PassportSelectionIndices.PP13_SEL_SOLO_6:
      return "PP13_SEL_SOLO_6";
    case DOTA2013PassportSelectionIndices.PP13_SEL_SOLO_7:
      return "PP13_SEL_SOLO_7";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum DOTA2013PassportSelectionIndices",
      );
  }
}

export interface CMsgDOTAPlayerInfo {
  accountId: number;
  name: string;
  countryCode: string;
  fantasyRole: FantasyRoles;
  teamId: number;
  teamName: string;
  teamTag: string;
  sponsor: string;
  isLocked: boolean;
  isPro: boolean;
  realName: string;
  totalEarnings: number;
  results: CMsgDOTAPlayerInfo_Results[];
  teamUrlLogo: string;
  auditEntries: CMsgDOTAPlayerInfo_AuditEntry[];
  teamAbbreviation: string;
}

export interface CMsgDOTAPlayerInfo_Results {
  leagueId: number;
  placement: number;
  earnings: number;
}

export interface CMsgDOTAPlayerInfo_AuditEntry {
  startTimestamp: number;
  endTimestamp: number;
  teamId: number;
  teamName: string;
  teamTag: string;
  teamUrlLogo: string;
}

export interface CMsgDOTAPlayerInfoList {
  playerInfos: CMsgDOTAPlayerInfo[];
}

export interface CMsgDOTATeamRoster {
  timestamp: number;
  teamId: number;
  memberAccountIds: number[];
  coachAccountId: number;
}

export interface CMsgDOTADPCProfileInfo {
  playerInfo: CMsgDOTAPlayerInfo | undefined;
  predictionInfo: CMsgDOTADPCProfileInfo_PredictionInfo | undefined;
  fantasyInfo: CMsgDOTADPCProfileInfo_FantasyInfo | undefined;
  disabledNotifications: number[];
}

export interface CMsgDOTADPCProfileInfo_PredictionInfo {
  percent: number;
  shardWinnings: number;
}

export interface CMsgDOTADPCProfileInfo_FantasyInfo {
  top90Finishes: number;
  top75Finishes: number;
  top50Finishes: number;
  shardWinnings: number;
}

export interface CMsgDOTALeaderboards {
  leaderboards: CMsgDOTALeaderboards_RegionLeaderboard[];
}

export interface CMsgDOTALeaderboards_RegionLeaderboard {
  division: number;
  accountIds: number[];
}

export interface CMsgDOTAPassportVoteTeamGuess {
  leagueId: number;
  winnerId: number;
  runnerupId: number;
}

export interface CMsgDOTAPassportVoteGenericSelection {
  selectionIndex: DOTA2013PassportSelectionIndices;
  selection: number;
}

export interface CMsgDOTAPassportStampedPlayer {
  steamId: string;
  stampLevel: number;
}

export interface CMsgDOTAPassportPlayerCardChallenge {
  challengeId: number;
}

export interface CMsgDOTAPassportVote {
  teamVotes: CMsgDOTAPassportVoteTeamGuess[];
  genericSelections: CMsgDOTAPassportVoteGenericSelection[];
  stampedPlayers: CMsgDOTAPassportStampedPlayer[];
  playerCardChallenges: CMsgDOTAPassportPlayerCardChallenge[];
}

export interface CMsgClientToGCGetPlayerCardRosterRequest {
  leagueId: number;
  fantasyPeriod: number;
}

export interface CMsgClientToGCGetPlayerCardRosterResponse {
  result: CMsgClientToGCGetPlayerCardRosterResponse_Result;
  playerCardItemId: string[];
  score: number;
  finalized: boolean;
  percentile: number;
}

export enum CMsgClientToGCGetPlayerCardRosterResponse_Result {
  SUCCESS = 0,
  ERROR_UNSPECIFIED = 1,
  ERROR_INVALID_LEAGUE_ID = 2,
  ERROR_INVALID_TIMESTAMP = 3,
}

export function cMsgClientToGCGetPlayerCardRosterResponse_ResultFromJSON(
  object: any,
): CMsgClientToGCGetPlayerCardRosterResponse_Result {
  switch (object) {
    case 0:
    case "SUCCESS":
      return CMsgClientToGCGetPlayerCardRosterResponse_Result.SUCCESS;
    case 1:
    case "ERROR_UNSPECIFIED":
      return CMsgClientToGCGetPlayerCardRosterResponse_Result.ERROR_UNSPECIFIED;
    case 2:
    case "ERROR_INVALID_LEAGUE_ID":
      return CMsgClientToGCGetPlayerCardRosterResponse_Result.ERROR_INVALID_LEAGUE_ID;
    case 3:
    case "ERROR_INVALID_TIMESTAMP":
      return CMsgClientToGCGetPlayerCardRosterResponse_Result.ERROR_INVALID_TIMESTAMP;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCGetPlayerCardRosterResponse_Result",
      );
  }
}

export function cMsgClientToGCGetPlayerCardRosterResponse_ResultToJSON(
  object: CMsgClientToGCGetPlayerCardRosterResponse_Result,
): string {
  switch (object) {
    case CMsgClientToGCGetPlayerCardRosterResponse_Result.SUCCESS:
      return "SUCCESS";
    case CMsgClientToGCGetPlayerCardRosterResponse_Result.ERROR_UNSPECIFIED:
      return "ERROR_UNSPECIFIED";
    case CMsgClientToGCGetPlayerCardRosterResponse_Result.ERROR_INVALID_LEAGUE_ID:
      return "ERROR_INVALID_LEAGUE_ID";
    case CMsgClientToGCGetPlayerCardRosterResponse_Result.ERROR_INVALID_TIMESTAMP:
      return "ERROR_INVALID_TIMESTAMP";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCGetPlayerCardRosterResponse_Result",
      );
  }
}

export interface CMsgClientToGCBatchGetPlayerCardRosterRequest {
  leagueTimestamps: CMsgClientToGCBatchGetPlayerCardRosterRequest_LeagueTimestamp[];
}

export interface CMsgClientToGCBatchGetPlayerCardRosterRequest_LeagueTimestamp {
  leagueId: number;
  fantasyPeriod: number;
}

export interface CMsgClientToGCBatchGetPlayerCardRosterResponse {
  responses: CMsgClientToGCBatchGetPlayerCardRosterResponse_RosterResponse[];
}

export enum CMsgClientToGCBatchGetPlayerCardRosterResponse_Result {
  SUCCESS = 0,
  ERROR_UNSPECIFIED = 1,
  ERROR_INVALID_LEAGUE_ID = 2,
  ERROR_INVALID_TIMESTAMP = 3,
}

export function cMsgClientToGCBatchGetPlayerCardRosterResponse_ResultFromJSON(
  object: any,
): CMsgClientToGCBatchGetPlayerCardRosterResponse_Result {
  switch (object) {
    case 0:
    case "SUCCESS":
      return CMsgClientToGCBatchGetPlayerCardRosterResponse_Result.SUCCESS;
    case 1:
    case "ERROR_UNSPECIFIED":
      return CMsgClientToGCBatchGetPlayerCardRosterResponse_Result.ERROR_UNSPECIFIED;
    case 2:
    case "ERROR_INVALID_LEAGUE_ID":
      return CMsgClientToGCBatchGetPlayerCardRosterResponse_Result.ERROR_INVALID_LEAGUE_ID;
    case 3:
    case "ERROR_INVALID_TIMESTAMP":
      return CMsgClientToGCBatchGetPlayerCardRosterResponse_Result.ERROR_INVALID_TIMESTAMP;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCBatchGetPlayerCardRosterResponse_Result",
      );
  }
}

export function cMsgClientToGCBatchGetPlayerCardRosterResponse_ResultToJSON(
  object: CMsgClientToGCBatchGetPlayerCardRosterResponse_Result,
): string {
  switch (object) {
    case CMsgClientToGCBatchGetPlayerCardRosterResponse_Result.SUCCESS:
      return "SUCCESS";
    case CMsgClientToGCBatchGetPlayerCardRosterResponse_Result.ERROR_UNSPECIFIED:
      return "ERROR_UNSPECIFIED";
    case CMsgClientToGCBatchGetPlayerCardRosterResponse_Result.ERROR_INVALID_LEAGUE_ID:
      return "ERROR_INVALID_LEAGUE_ID";
    case CMsgClientToGCBatchGetPlayerCardRosterResponse_Result.ERROR_INVALID_TIMESTAMP:
      return "ERROR_INVALID_TIMESTAMP";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCBatchGetPlayerCardRosterResponse_Result",
      );
  }
}

export interface CMsgClientToGCBatchGetPlayerCardRosterResponse_RosterResponse {
  leagueId: number;
  deprecatedTimestamp: number;
  result: CMsgClientToGCBatchGetPlayerCardRosterResponse_Result;
  playerCardItemId: string[];
  score: number;
  finalized: boolean;
  percentile: number;
  fantasyPeriod: number;
}

export interface CMsgClientToGCSetPlayerCardRosterRequest {
  leagueId: number;
  deprecatedTimestamp: number;
  slot: number;
  playerCardItemId: string;
  eventId: number;
  fantasyPeriod: number;
}

export interface CMsgClientToGCSetPlayerCardRosterResponse {
  result: CMsgClientToGCSetPlayerCardRosterResponse_Result;
}

export enum CMsgClientToGCSetPlayerCardRosterResponse_Result {
  SUCCESS = 0,
  ERROR_UNSPECIFIED = 1,
  ERROR_INVALID_LEAGUE_ID = 2,
  ERROR_INVALID_TIMESTAMP = 3,
  ERROR_PLAYER_CARD_NOT_OWNED = 4,
  ERROR_INVALID_SLOT = 5,
  ERROR_FAILED_CARD_INFO = 6,
  ERROR_ACCOUNT_DUPLICATE = 7,
  ERROR_LOCKED_TIMESTAMP = 8,
  ERROR_INVALID_LEAGUE_FOR_PERIOD = 9,
  ERROR_INVALID_EVENT = 10,
}

export function cMsgClientToGCSetPlayerCardRosterResponse_ResultFromJSON(
  object: any,
): CMsgClientToGCSetPlayerCardRosterResponse_Result {
  switch (object) {
    case 0:
    case "SUCCESS":
      return CMsgClientToGCSetPlayerCardRosterResponse_Result.SUCCESS;
    case 1:
    case "ERROR_UNSPECIFIED":
      return CMsgClientToGCSetPlayerCardRosterResponse_Result.ERROR_UNSPECIFIED;
    case 2:
    case "ERROR_INVALID_LEAGUE_ID":
      return CMsgClientToGCSetPlayerCardRosterResponse_Result.ERROR_INVALID_LEAGUE_ID;
    case 3:
    case "ERROR_INVALID_TIMESTAMP":
      return CMsgClientToGCSetPlayerCardRosterResponse_Result.ERROR_INVALID_TIMESTAMP;
    case 4:
    case "ERROR_PLAYER_CARD_NOT_OWNED":
      return CMsgClientToGCSetPlayerCardRosterResponse_Result.ERROR_PLAYER_CARD_NOT_OWNED;
    case 5:
    case "ERROR_INVALID_SLOT":
      return CMsgClientToGCSetPlayerCardRosterResponse_Result.ERROR_INVALID_SLOT;
    case 6:
    case "ERROR_FAILED_CARD_INFO":
      return CMsgClientToGCSetPlayerCardRosterResponse_Result.ERROR_FAILED_CARD_INFO;
    case 7:
    case "ERROR_ACCOUNT_DUPLICATE":
      return CMsgClientToGCSetPlayerCardRosterResponse_Result.ERROR_ACCOUNT_DUPLICATE;
    case 8:
    case "ERROR_LOCKED_TIMESTAMP":
      return CMsgClientToGCSetPlayerCardRosterResponse_Result.ERROR_LOCKED_TIMESTAMP;
    case 9:
    case "ERROR_INVALID_LEAGUE_FOR_PERIOD":
      return CMsgClientToGCSetPlayerCardRosterResponse_Result.ERROR_INVALID_LEAGUE_FOR_PERIOD;
    case 10:
    case "ERROR_INVALID_EVENT":
      return CMsgClientToGCSetPlayerCardRosterResponse_Result.ERROR_INVALID_EVENT;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCSetPlayerCardRosterResponse_Result",
      );
  }
}

export function cMsgClientToGCSetPlayerCardRosterResponse_ResultToJSON(
  object: CMsgClientToGCSetPlayerCardRosterResponse_Result,
): string {
  switch (object) {
    case CMsgClientToGCSetPlayerCardRosterResponse_Result.SUCCESS:
      return "SUCCESS";
    case CMsgClientToGCSetPlayerCardRosterResponse_Result.ERROR_UNSPECIFIED:
      return "ERROR_UNSPECIFIED";
    case CMsgClientToGCSetPlayerCardRosterResponse_Result.ERROR_INVALID_LEAGUE_ID:
      return "ERROR_INVALID_LEAGUE_ID";
    case CMsgClientToGCSetPlayerCardRosterResponse_Result.ERROR_INVALID_TIMESTAMP:
      return "ERROR_INVALID_TIMESTAMP";
    case CMsgClientToGCSetPlayerCardRosterResponse_Result.ERROR_PLAYER_CARD_NOT_OWNED:
      return "ERROR_PLAYER_CARD_NOT_OWNED";
    case CMsgClientToGCSetPlayerCardRosterResponse_Result.ERROR_INVALID_SLOT:
      return "ERROR_INVALID_SLOT";
    case CMsgClientToGCSetPlayerCardRosterResponse_Result.ERROR_FAILED_CARD_INFO:
      return "ERROR_FAILED_CARD_INFO";
    case CMsgClientToGCSetPlayerCardRosterResponse_Result.ERROR_ACCOUNT_DUPLICATE:
      return "ERROR_ACCOUNT_DUPLICATE";
    case CMsgClientToGCSetPlayerCardRosterResponse_Result.ERROR_LOCKED_TIMESTAMP:
      return "ERROR_LOCKED_TIMESTAMP";
    case CMsgClientToGCSetPlayerCardRosterResponse_Result.ERROR_INVALID_LEAGUE_FOR_PERIOD:
      return "ERROR_INVALID_LEAGUE_FOR_PERIOD";
    case CMsgClientToGCSetPlayerCardRosterResponse_Result.ERROR_INVALID_EVENT:
      return "ERROR_INVALID_EVENT";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCSetPlayerCardRosterResponse_Result",
      );
  }
}

export interface CMsgDOTAFantasyDPCLeagueStatus {
  leagueInfos: CMsgDOTAFantasyDPCLeagueStatus_LeagueInfo[];
}

export enum CMsgDOTAFantasyDPCLeagueStatus_ERosterStatus {
  UNSET = 0,
  PARTIAL = 1,
  FULL = 2,
  CONCLUDED = 3,
}

export function cMsgDOTAFantasyDPCLeagueStatus_ERosterStatusFromJSON(
  object: any,
): CMsgDOTAFantasyDPCLeagueStatus_ERosterStatus {
  switch (object) {
    case 0:
    case "UNSET":
      return CMsgDOTAFantasyDPCLeagueStatus_ERosterStatus.UNSET;
    case 1:
    case "PARTIAL":
      return CMsgDOTAFantasyDPCLeagueStatus_ERosterStatus.PARTIAL;
    case 2:
    case "FULL":
      return CMsgDOTAFantasyDPCLeagueStatus_ERosterStatus.FULL;
    case 3:
    case "CONCLUDED":
      return CMsgDOTAFantasyDPCLeagueStatus_ERosterStatus.CONCLUDED;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTAFantasyDPCLeagueStatus_ERosterStatus",
      );
  }
}

export function cMsgDOTAFantasyDPCLeagueStatus_ERosterStatusToJSON(
  object: CMsgDOTAFantasyDPCLeagueStatus_ERosterStatus,
): string {
  switch (object) {
    case CMsgDOTAFantasyDPCLeagueStatus_ERosterStatus.UNSET:
      return "UNSET";
    case CMsgDOTAFantasyDPCLeagueStatus_ERosterStatus.PARTIAL:
      return "PARTIAL";
    case CMsgDOTAFantasyDPCLeagueStatus_ERosterStatus.FULL:
      return "FULL";
    case CMsgDOTAFantasyDPCLeagueStatus_ERosterStatus.CONCLUDED:
      return "CONCLUDED";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTAFantasyDPCLeagueStatus_ERosterStatus",
      );
  }
}

export interface CMsgDOTAFantasyDPCLeagueStatus_LeagueInfo {
  leagueId: number;
  leagueName: string;
  startTimestamp: number;
  endTimestamp: number;
  dayTimestamps: number[];
  status: CMsgDOTAFantasyDPCLeagueStatus_ERosterStatus;
}

export interface CMsgDOTADPCSearchResults {
  players: CMsgDOTADPCSearchResults_Player[];
  teams: CMsgDOTADPCSearchResults_Team[];
  leagues: CMsgDOTADPCSearchResults_League[];
}

export enum CMsgDOTADPCSearchResults_ESearchResultsDesired {
  k_ESearchResultsDesired_Players = 1,
  k_ESearchResultsDesired_Teams = 2,
  k_ESearchResultsDesired_Leagues = 4,
  k_ESearchResultsDesired_All = 7,
}

export function cMsgDOTADPCSearchResults_ESearchResultsDesiredFromJSON(
  object: any,
): CMsgDOTADPCSearchResults_ESearchResultsDesired {
  switch (object) {
    case 1:
    case "k_ESearchResultsDesired_Players":
      return CMsgDOTADPCSearchResults_ESearchResultsDesired.k_ESearchResultsDesired_Players;
    case 2:
    case "k_ESearchResultsDesired_Teams":
      return CMsgDOTADPCSearchResults_ESearchResultsDesired.k_ESearchResultsDesired_Teams;
    case 4:
    case "k_ESearchResultsDesired_Leagues":
      return CMsgDOTADPCSearchResults_ESearchResultsDesired.k_ESearchResultsDesired_Leagues;
    case 7:
    case "k_ESearchResultsDesired_All":
      return CMsgDOTADPCSearchResults_ESearchResultsDesired.k_ESearchResultsDesired_All;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTADPCSearchResults_ESearchResultsDesired",
      );
  }
}

export function cMsgDOTADPCSearchResults_ESearchResultsDesiredToJSON(
  object: CMsgDOTADPCSearchResults_ESearchResultsDesired,
): string {
  switch (object) {
    case CMsgDOTADPCSearchResults_ESearchResultsDesired.k_ESearchResultsDesired_Players:
      return "k_ESearchResultsDesired_Players";
    case CMsgDOTADPCSearchResults_ESearchResultsDesired.k_ESearchResultsDesired_Teams:
      return "k_ESearchResultsDesired_Teams";
    case CMsgDOTADPCSearchResults_ESearchResultsDesired.k_ESearchResultsDesired_Leagues:
      return "k_ESearchResultsDesired_Leagues";
    case CMsgDOTADPCSearchResults_ESearchResultsDesired.k_ESearchResultsDesired_All:
      return "k_ESearchResultsDesired_All";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTADPCSearchResults_ESearchResultsDesired",
      );
  }
}

export interface CMsgDOTADPCSearchResults_Player {
  id: number;
  name: string;
  realName: string;
}

export interface CMsgDOTADPCSearchResults_Team {
  id: number;
  name: string;
  url: string;
}

export interface CMsgDOTADPCSearchResults_League {
  id: number;
  name: string;
}

export interface CMsgDOTADPCTeamFavoriteRankings {
  teams: CMsgDOTADPCTeamFavoriteRankings_Team[];
}

export interface CMsgDOTADPCTeamFavoriteRankings_Team {
  teamId: number;
  favorites: number;
}

function createBaseCMsgDOTAPlayerInfo(): CMsgDOTAPlayerInfo {
  return {
    accountId: 0,
    name: "",
    countryCode: "",
    fantasyRole: 0,
    teamId: 0,
    teamName: "",
    teamTag: "",
    sponsor: "",
    isLocked: false,
    isPro: false,
    realName: "",
    totalEarnings: 0,
    results: [],
    teamUrlLogo: "",
    auditEntries: [],
    teamAbbreviation: "",
  };
}

export const CMsgDOTAPlayerInfo = {
  encode(message: CMsgDOTAPlayerInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.countryCode !== "") {
      writer.uint32(26).string(message.countryCode);
    }
    if (message.fantasyRole !== 0) {
      writer.uint32(32).int32(message.fantasyRole);
    }
    if (message.teamId !== 0) {
      writer.uint32(40).uint32(message.teamId);
    }
    if (message.teamName !== "") {
      writer.uint32(50).string(message.teamName);
    }
    if (message.teamTag !== "") {
      writer.uint32(58).string(message.teamTag);
    }
    if (message.sponsor !== "") {
      writer.uint32(66).string(message.sponsor);
    }
    if (message.isLocked === true) {
      writer.uint32(72).bool(message.isLocked);
    }
    if (message.isPro === true) {
      writer.uint32(80).bool(message.isPro);
    }
    if (message.realName !== "") {
      writer.uint32(90).string(message.realName);
    }
    if (message.totalEarnings !== 0) {
      writer.uint32(104).uint32(message.totalEarnings);
    }
    for (const v of message.results) {
      CMsgDOTAPlayerInfo_Results.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.teamUrlLogo !== "") {
      writer.uint32(122).string(message.teamUrlLogo);
    }
    for (const v of message.auditEntries) {
      CMsgDOTAPlayerInfo_AuditEntry.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    if (message.teamAbbreviation !== "") {
      writer.uint32(138).string(message.teamAbbreviation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAPlayerInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAPlayerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.accountId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.countryCode = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.fantasyRole = reader.int32() as any;
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.teamName = reader.string();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.teamTag = reader.string();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.sponsor = reader.string();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.isLocked = reader.bool();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.isPro = reader.bool();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.realName = reader.string();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.totalEarnings = reader.uint32();
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.results.push(CMsgDOTAPlayerInfo_Results.decode(reader, reader.uint32()));
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.teamUrlLogo = reader.string();
          continue;
        case 16:
          if (tag != 130) {
            break;
          }

          message.auditEntries.push(CMsgDOTAPlayerInfo_AuditEntry.decode(reader, reader.uint32()));
          continue;
        case 17:
          if (tag != 138) {
            break;
          }

          message.teamAbbreviation = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAPlayerInfo {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      countryCode: isSet(object.countryCode) ? String(object.countryCode) : "",
      fantasyRole: isSet(object.fantasyRole) ? fantasyRolesFromJSON(object.fantasyRole) : 0,
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      teamName: isSet(object.teamName) ? String(object.teamName) : "",
      teamTag: isSet(object.teamTag) ? String(object.teamTag) : "",
      sponsor: isSet(object.sponsor) ? String(object.sponsor) : "",
      isLocked: isSet(object.isLocked) ? Boolean(object.isLocked) : false,
      isPro: isSet(object.isPro) ? Boolean(object.isPro) : false,
      realName: isSet(object.realName) ? String(object.realName) : "",
      totalEarnings: isSet(object.totalEarnings) ? Number(object.totalEarnings) : 0,
      results: Array.isArray(object?.results)
        ? object.results.map((e: any) => CMsgDOTAPlayerInfo_Results.fromJSON(e))
        : [],
      teamUrlLogo: isSet(object.teamUrlLogo) ? String(object.teamUrlLogo) : "",
      auditEntries: Array.isArray(object?.auditEntries)
        ? object.auditEntries.map((e: any) => CMsgDOTAPlayerInfo_AuditEntry.fromJSON(e))
        : [],
      teamAbbreviation: isSet(object.teamAbbreviation) ? String(object.teamAbbreviation) : "",
    };
  },

  toJSON(message: CMsgDOTAPlayerInfo): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.name !== undefined && (obj.name = message.name);
    message.countryCode !== undefined && (obj.countryCode = message.countryCode);
    message.fantasyRole !== undefined && (obj.fantasyRole = fantasyRolesToJSON(message.fantasyRole));
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.teamName !== undefined && (obj.teamName = message.teamName);
    message.teamTag !== undefined && (obj.teamTag = message.teamTag);
    message.sponsor !== undefined && (obj.sponsor = message.sponsor);
    message.isLocked !== undefined && (obj.isLocked = message.isLocked);
    message.isPro !== undefined && (obj.isPro = message.isPro);
    message.realName !== undefined && (obj.realName = message.realName);
    message.totalEarnings !== undefined && (obj.totalEarnings = Math.round(message.totalEarnings));
    if (message.results) {
      obj.results = message.results.map((e) => e ? CMsgDOTAPlayerInfo_Results.toJSON(e) : undefined);
    } else {
      obj.results = [];
    }
    message.teamUrlLogo !== undefined && (obj.teamUrlLogo = message.teamUrlLogo);
    if (message.auditEntries) {
      obj.auditEntries = message.auditEntries.map((e) => e ? CMsgDOTAPlayerInfo_AuditEntry.toJSON(e) : undefined);
    } else {
      obj.auditEntries = [];
    }
    message.teamAbbreviation !== undefined && (obj.teamAbbreviation = message.teamAbbreviation);
    return obj;
  },
};

function createBaseCMsgDOTAPlayerInfo_Results(): CMsgDOTAPlayerInfo_Results {
  return { leagueId: 0, placement: 0, earnings: 0 };
}

export const CMsgDOTAPlayerInfo_Results = {
  encode(message: CMsgDOTAPlayerInfo_Results, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leagueId !== 0) {
      writer.uint32(8).uint32(message.leagueId);
    }
    if (message.placement !== 0) {
      writer.uint32(16).uint32(message.placement);
    }
    if (message.earnings !== 0) {
      writer.uint32(24).uint32(message.earnings);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAPlayerInfo_Results {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAPlayerInfo_Results();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.placement = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.earnings = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAPlayerInfo_Results {
    return {
      leagueId: isSet(object.leagueId) ? Number(object.leagueId) : 0,
      placement: isSet(object.placement) ? Number(object.placement) : 0,
      earnings: isSet(object.earnings) ? Number(object.earnings) : 0,
    };
  },

  toJSON(message: CMsgDOTAPlayerInfo_Results): unknown {
    const obj: any = {};
    message.leagueId !== undefined && (obj.leagueId = Math.round(message.leagueId));
    message.placement !== undefined && (obj.placement = Math.round(message.placement));
    message.earnings !== undefined && (obj.earnings = Math.round(message.earnings));
    return obj;
  },
};

function createBaseCMsgDOTAPlayerInfo_AuditEntry(): CMsgDOTAPlayerInfo_AuditEntry {
  return { startTimestamp: 0, endTimestamp: 0, teamId: 0, teamName: "", teamTag: "", teamUrlLogo: "" };
}

export const CMsgDOTAPlayerInfo_AuditEntry = {
  encode(message: CMsgDOTAPlayerInfo_AuditEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startTimestamp !== 0) {
      writer.uint32(8).uint32(message.startTimestamp);
    }
    if (message.endTimestamp !== 0) {
      writer.uint32(16).uint32(message.endTimestamp);
    }
    if (message.teamId !== 0) {
      writer.uint32(24).uint32(message.teamId);
    }
    if (message.teamName !== "") {
      writer.uint32(34).string(message.teamName);
    }
    if (message.teamTag !== "") {
      writer.uint32(42).string(message.teamTag);
    }
    if (message.teamUrlLogo !== "") {
      writer.uint32(50).string(message.teamUrlLogo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAPlayerInfo_AuditEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAPlayerInfo_AuditEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.startTimestamp = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.endTimestamp = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.teamName = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.teamTag = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.teamUrlLogo = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAPlayerInfo_AuditEntry {
    return {
      startTimestamp: isSet(object.startTimestamp) ? Number(object.startTimestamp) : 0,
      endTimestamp: isSet(object.endTimestamp) ? Number(object.endTimestamp) : 0,
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      teamName: isSet(object.teamName) ? String(object.teamName) : "",
      teamTag: isSet(object.teamTag) ? String(object.teamTag) : "",
      teamUrlLogo: isSet(object.teamUrlLogo) ? String(object.teamUrlLogo) : "",
    };
  },

  toJSON(message: CMsgDOTAPlayerInfo_AuditEntry): unknown {
    const obj: any = {};
    message.startTimestamp !== undefined && (obj.startTimestamp = Math.round(message.startTimestamp));
    message.endTimestamp !== undefined && (obj.endTimestamp = Math.round(message.endTimestamp));
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.teamName !== undefined && (obj.teamName = message.teamName);
    message.teamTag !== undefined && (obj.teamTag = message.teamTag);
    message.teamUrlLogo !== undefined && (obj.teamUrlLogo = message.teamUrlLogo);
    return obj;
  },
};

function createBaseCMsgDOTAPlayerInfoList(): CMsgDOTAPlayerInfoList {
  return { playerInfos: [] };
}

export const CMsgDOTAPlayerInfoList = {
  encode(message: CMsgDOTAPlayerInfoList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.playerInfos) {
      CMsgDOTAPlayerInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAPlayerInfoList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAPlayerInfoList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.playerInfos.push(CMsgDOTAPlayerInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAPlayerInfoList {
    return {
      playerInfos: Array.isArray(object?.playerInfos)
        ? object.playerInfos.map((e: any) => CMsgDOTAPlayerInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgDOTAPlayerInfoList): unknown {
    const obj: any = {};
    if (message.playerInfos) {
      obj.playerInfos = message.playerInfos.map((e) => e ? CMsgDOTAPlayerInfo.toJSON(e) : undefined);
    } else {
      obj.playerInfos = [];
    }
    return obj;
  },
};

function createBaseCMsgDOTATeamRoster(): CMsgDOTATeamRoster {
  return { timestamp: 0, teamId: 0, memberAccountIds: [], coachAccountId: 0 };
}

export const CMsgDOTATeamRoster = {
  encode(message: CMsgDOTATeamRoster, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== 0) {
      writer.uint32(8).uint32(message.timestamp);
    }
    if (message.teamId !== 0) {
      writer.uint32(16).uint32(message.teamId);
    }
    writer.uint32(26).fork();
    for (const v of message.memberAccountIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.coachAccountId !== 0) {
      writer.uint32(32).uint32(message.coachAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTATeamRoster {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTATeamRoster();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.timestamp = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
        case 3:
          if (tag == 24) {
            message.memberAccountIds.push(reader.uint32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.memberAccountIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 4:
          if (tag != 32) {
            break;
          }

          message.coachAccountId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTATeamRoster {
    return {
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      memberAccountIds: Array.isArray(object?.memberAccountIds)
        ? object.memberAccountIds.map((e: any) => Number(e))
        : [],
      coachAccountId: isSet(object.coachAccountId) ? Number(object.coachAccountId) : 0,
    };
  },

  toJSON(message: CMsgDOTATeamRoster): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    if (message.memberAccountIds) {
      obj.memberAccountIds = message.memberAccountIds.map((e) => Math.round(e));
    } else {
      obj.memberAccountIds = [];
    }
    message.coachAccountId !== undefined && (obj.coachAccountId = Math.round(message.coachAccountId));
    return obj;
  },
};

function createBaseCMsgDOTADPCProfileInfo(): CMsgDOTADPCProfileInfo {
  return { playerInfo: undefined, predictionInfo: undefined, fantasyInfo: undefined, disabledNotifications: [] };
}

export const CMsgDOTADPCProfileInfo = {
  encode(message: CMsgDOTADPCProfileInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerInfo !== undefined) {
      CMsgDOTAPlayerInfo.encode(message.playerInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.predictionInfo !== undefined) {
      CMsgDOTADPCProfileInfo_PredictionInfo.encode(message.predictionInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.fantasyInfo !== undefined) {
      CMsgDOTADPCProfileInfo_FantasyInfo.encode(message.fantasyInfo, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.disabledNotifications) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTADPCProfileInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTADPCProfileInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.playerInfo = CMsgDOTAPlayerInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.predictionInfo = CMsgDOTADPCProfileInfo_PredictionInfo.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.fantasyInfo = CMsgDOTADPCProfileInfo_FantasyInfo.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag == 32) {
            message.disabledNotifications.push(reader.uint32());
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.disabledNotifications.push(reader.uint32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTADPCProfileInfo {
    return {
      playerInfo: isSet(object.playerInfo) ? CMsgDOTAPlayerInfo.fromJSON(object.playerInfo) : undefined,
      predictionInfo: isSet(object.predictionInfo)
        ? CMsgDOTADPCProfileInfo_PredictionInfo.fromJSON(object.predictionInfo)
        : undefined,
      fantasyInfo: isSet(object.fantasyInfo)
        ? CMsgDOTADPCProfileInfo_FantasyInfo.fromJSON(object.fantasyInfo)
        : undefined,
      disabledNotifications: Array.isArray(object?.disabledNotifications)
        ? object.disabledNotifications.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: CMsgDOTADPCProfileInfo): unknown {
    const obj: any = {};
    message.playerInfo !== undefined &&
      (obj.playerInfo = message.playerInfo ? CMsgDOTAPlayerInfo.toJSON(message.playerInfo) : undefined);
    message.predictionInfo !== undefined && (obj.predictionInfo = message.predictionInfo
      ? CMsgDOTADPCProfileInfo_PredictionInfo.toJSON(message.predictionInfo)
      : undefined);
    message.fantasyInfo !== undefined && (obj.fantasyInfo = message.fantasyInfo
      ? CMsgDOTADPCProfileInfo_FantasyInfo.toJSON(message.fantasyInfo)
      : undefined);
    if (message.disabledNotifications) {
      obj.disabledNotifications = message.disabledNotifications.map((e) => Math.round(e));
    } else {
      obj.disabledNotifications = [];
    }
    return obj;
  },
};

function createBaseCMsgDOTADPCProfileInfo_PredictionInfo(): CMsgDOTADPCProfileInfo_PredictionInfo {
  return { percent: 0, shardWinnings: 0 };
}

export const CMsgDOTADPCProfileInfo_PredictionInfo = {
  encode(message: CMsgDOTADPCProfileInfo_PredictionInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.percent !== 0) {
      writer.uint32(8).uint32(message.percent);
    }
    if (message.shardWinnings !== 0) {
      writer.uint32(16).int32(message.shardWinnings);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTADPCProfileInfo_PredictionInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTADPCProfileInfo_PredictionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.percent = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.shardWinnings = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTADPCProfileInfo_PredictionInfo {
    return {
      percent: isSet(object.percent) ? Number(object.percent) : 0,
      shardWinnings: isSet(object.shardWinnings) ? Number(object.shardWinnings) : 0,
    };
  },

  toJSON(message: CMsgDOTADPCProfileInfo_PredictionInfo): unknown {
    const obj: any = {};
    message.percent !== undefined && (obj.percent = Math.round(message.percent));
    message.shardWinnings !== undefined && (obj.shardWinnings = Math.round(message.shardWinnings));
    return obj;
  },
};

function createBaseCMsgDOTADPCProfileInfo_FantasyInfo(): CMsgDOTADPCProfileInfo_FantasyInfo {
  return { top90Finishes: 0, top75Finishes: 0, top50Finishes: 0, shardWinnings: 0 };
}

export const CMsgDOTADPCProfileInfo_FantasyInfo = {
  encode(message: CMsgDOTADPCProfileInfo_FantasyInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.top90Finishes !== 0) {
      writer.uint32(8).uint32(message.top90Finishes);
    }
    if (message.top75Finishes !== 0) {
      writer.uint32(16).uint32(message.top75Finishes);
    }
    if (message.top50Finishes !== 0) {
      writer.uint32(24).uint32(message.top50Finishes);
    }
    if (message.shardWinnings !== 0) {
      writer.uint32(32).uint32(message.shardWinnings);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTADPCProfileInfo_FantasyInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTADPCProfileInfo_FantasyInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.top90Finishes = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.top75Finishes = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.top50Finishes = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.shardWinnings = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTADPCProfileInfo_FantasyInfo {
    return {
      top90Finishes: isSet(object.top90Finishes) ? Number(object.top90Finishes) : 0,
      top75Finishes: isSet(object.top75Finishes) ? Number(object.top75Finishes) : 0,
      top50Finishes: isSet(object.top50Finishes) ? Number(object.top50Finishes) : 0,
      shardWinnings: isSet(object.shardWinnings) ? Number(object.shardWinnings) : 0,
    };
  },

  toJSON(message: CMsgDOTADPCProfileInfo_FantasyInfo): unknown {
    const obj: any = {};
    message.top90Finishes !== undefined && (obj.top90Finishes = Math.round(message.top90Finishes));
    message.top75Finishes !== undefined && (obj.top75Finishes = Math.round(message.top75Finishes));
    message.top50Finishes !== undefined && (obj.top50Finishes = Math.round(message.top50Finishes));
    message.shardWinnings !== undefined && (obj.shardWinnings = Math.round(message.shardWinnings));
    return obj;
  },
};

function createBaseCMsgDOTALeaderboards(): CMsgDOTALeaderboards {
  return { leaderboards: [] };
}

export const CMsgDOTALeaderboards = {
  encode(message: CMsgDOTALeaderboards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.leaderboards) {
      CMsgDOTALeaderboards_RegionLeaderboard.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeaderboards {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeaderboards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 18) {
            break;
          }

          message.leaderboards.push(CMsgDOTALeaderboards_RegionLeaderboard.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTALeaderboards {
    return {
      leaderboards: Array.isArray(object?.leaderboards)
        ? object.leaderboards.map((e: any) => CMsgDOTALeaderboards_RegionLeaderboard.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgDOTALeaderboards): unknown {
    const obj: any = {};
    if (message.leaderboards) {
      obj.leaderboards = message.leaderboards.map((e) =>
        e ? CMsgDOTALeaderboards_RegionLeaderboard.toJSON(e) : undefined
      );
    } else {
      obj.leaderboards = [];
    }
    return obj;
  },
};

function createBaseCMsgDOTALeaderboards_RegionLeaderboard(): CMsgDOTALeaderboards_RegionLeaderboard {
  return { division: 0, accountIds: [] };
}

export const CMsgDOTALeaderboards_RegionLeaderboard = {
  encode(message: CMsgDOTALeaderboards_RegionLeaderboard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.division !== 0) {
      writer.uint32(8).uint32(message.division);
    }
    writer.uint32(18).fork();
    for (const v of message.accountIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeaderboards_RegionLeaderboard {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeaderboards_RegionLeaderboard();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.division = reader.uint32();
          continue;
        case 2:
          if (tag == 16) {
            message.accountIds.push(reader.uint32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.accountIds.push(reader.uint32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTALeaderboards_RegionLeaderboard {
    return {
      division: isSet(object.division) ? Number(object.division) : 0,
      accountIds: Array.isArray(object?.accountIds) ? object.accountIds.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgDOTALeaderboards_RegionLeaderboard): unknown {
    const obj: any = {};
    message.division !== undefined && (obj.division = Math.round(message.division));
    if (message.accountIds) {
      obj.accountIds = message.accountIds.map((e) => Math.round(e));
    } else {
      obj.accountIds = [];
    }
    return obj;
  },
};

function createBaseCMsgDOTAPassportVoteTeamGuess(): CMsgDOTAPassportVoteTeamGuess {
  return { leagueId: 0, winnerId: 0, runnerupId: 0 };
}

export const CMsgDOTAPassportVoteTeamGuess = {
  encode(message: CMsgDOTAPassportVoteTeamGuess, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leagueId !== 0) {
      writer.uint32(8).uint32(message.leagueId);
    }
    if (message.winnerId !== 0) {
      writer.uint32(16).uint32(message.winnerId);
    }
    if (message.runnerupId !== 0) {
      writer.uint32(24).uint32(message.runnerupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAPassportVoteTeamGuess {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAPassportVoteTeamGuess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.winnerId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.runnerupId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAPassportVoteTeamGuess {
    return {
      leagueId: isSet(object.leagueId) ? Number(object.leagueId) : 0,
      winnerId: isSet(object.winnerId) ? Number(object.winnerId) : 0,
      runnerupId: isSet(object.runnerupId) ? Number(object.runnerupId) : 0,
    };
  },

  toJSON(message: CMsgDOTAPassportVoteTeamGuess): unknown {
    const obj: any = {};
    message.leagueId !== undefined && (obj.leagueId = Math.round(message.leagueId));
    message.winnerId !== undefined && (obj.winnerId = Math.round(message.winnerId));
    message.runnerupId !== undefined && (obj.runnerupId = Math.round(message.runnerupId));
    return obj;
  },
};

function createBaseCMsgDOTAPassportVoteGenericSelection(): CMsgDOTAPassportVoteGenericSelection {
  return { selectionIndex: 0, selection: 0 };
}

export const CMsgDOTAPassportVoteGenericSelection = {
  encode(message: CMsgDOTAPassportVoteGenericSelection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.selectionIndex !== 0) {
      writer.uint32(8).int32(message.selectionIndex);
    }
    if (message.selection !== 0) {
      writer.uint32(16).uint32(message.selection);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAPassportVoteGenericSelection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAPassportVoteGenericSelection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.selectionIndex = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.selection = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAPassportVoteGenericSelection {
    return {
      selectionIndex: isSet(object.selectionIndex)
        ? dOTA2013PassportSelectionIndicesFromJSON(object.selectionIndex)
        : 0,
      selection: isSet(object.selection) ? Number(object.selection) : 0,
    };
  },

  toJSON(message: CMsgDOTAPassportVoteGenericSelection): unknown {
    const obj: any = {};
    message.selectionIndex !== undefined &&
      (obj.selectionIndex = dOTA2013PassportSelectionIndicesToJSON(message.selectionIndex));
    message.selection !== undefined && (obj.selection = Math.round(message.selection));
    return obj;
  },
};

function createBaseCMsgDOTAPassportStampedPlayer(): CMsgDOTAPassportStampedPlayer {
  return { steamId: "0", stampLevel: 0 };
}

export const CMsgDOTAPassportStampedPlayer = {
  encode(message: CMsgDOTAPassportStampedPlayer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== "0") {
      writer.uint32(8).uint64(message.steamId);
    }
    if (message.stampLevel !== 0) {
      writer.uint32(16).uint32(message.stampLevel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAPassportStampedPlayer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAPassportStampedPlayer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.steamId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.stampLevel = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAPassportStampedPlayer {
    return {
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      stampLevel: isSet(object.stampLevel) ? Number(object.stampLevel) : 0,
    };
  },

  toJSON(message: CMsgDOTAPassportStampedPlayer): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.stampLevel !== undefined && (obj.stampLevel = Math.round(message.stampLevel));
    return obj;
  },
};

function createBaseCMsgDOTAPassportPlayerCardChallenge(): CMsgDOTAPassportPlayerCardChallenge {
  return { challengeId: 0 };
}

export const CMsgDOTAPassportPlayerCardChallenge = {
  encode(message: CMsgDOTAPassportPlayerCardChallenge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.challengeId !== 0) {
      writer.uint32(8).uint32(message.challengeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAPassportPlayerCardChallenge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAPassportPlayerCardChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.challengeId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAPassportPlayerCardChallenge {
    return { challengeId: isSet(object.challengeId) ? Number(object.challengeId) : 0 };
  },

  toJSON(message: CMsgDOTAPassportPlayerCardChallenge): unknown {
    const obj: any = {};
    message.challengeId !== undefined && (obj.challengeId = Math.round(message.challengeId));
    return obj;
  },
};

function createBaseCMsgDOTAPassportVote(): CMsgDOTAPassportVote {
  return { teamVotes: [], genericSelections: [], stampedPlayers: [], playerCardChallenges: [] };
}

export const CMsgDOTAPassportVote = {
  encode(message: CMsgDOTAPassportVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.teamVotes) {
      CMsgDOTAPassportVoteTeamGuess.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.genericSelections) {
      CMsgDOTAPassportVoteGenericSelection.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.stampedPlayers) {
      CMsgDOTAPassportStampedPlayer.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.playerCardChallenges) {
      CMsgDOTAPassportPlayerCardChallenge.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAPassportVote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAPassportVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.teamVotes.push(CMsgDOTAPassportVoteTeamGuess.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.genericSelections.push(CMsgDOTAPassportVoteGenericSelection.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.stampedPlayers.push(CMsgDOTAPassportStampedPlayer.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.playerCardChallenges.push(CMsgDOTAPassportPlayerCardChallenge.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAPassportVote {
    return {
      teamVotes: Array.isArray(object?.teamVotes)
        ? object.teamVotes.map((e: any) => CMsgDOTAPassportVoteTeamGuess.fromJSON(e))
        : [],
      genericSelections: Array.isArray(object?.genericSelections)
        ? object.genericSelections.map((e: any) => CMsgDOTAPassportVoteGenericSelection.fromJSON(e))
        : [],
      stampedPlayers: Array.isArray(object?.stampedPlayers)
        ? object.stampedPlayers.map((e: any) => CMsgDOTAPassportStampedPlayer.fromJSON(e))
        : [],
      playerCardChallenges: Array.isArray(object?.playerCardChallenges)
        ? object.playerCardChallenges.map((e: any) => CMsgDOTAPassportPlayerCardChallenge.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgDOTAPassportVote): unknown {
    const obj: any = {};
    if (message.teamVotes) {
      obj.teamVotes = message.teamVotes.map((e) => e ? CMsgDOTAPassportVoteTeamGuess.toJSON(e) : undefined);
    } else {
      obj.teamVotes = [];
    }
    if (message.genericSelections) {
      obj.genericSelections = message.genericSelections.map((e) =>
        e ? CMsgDOTAPassportVoteGenericSelection.toJSON(e) : undefined
      );
    } else {
      obj.genericSelections = [];
    }
    if (message.stampedPlayers) {
      obj.stampedPlayers = message.stampedPlayers.map((e) => e ? CMsgDOTAPassportStampedPlayer.toJSON(e) : undefined);
    } else {
      obj.stampedPlayers = [];
    }
    if (message.playerCardChallenges) {
      obj.playerCardChallenges = message.playerCardChallenges.map((e) =>
        e ? CMsgDOTAPassportPlayerCardChallenge.toJSON(e) : undefined
      );
    } else {
      obj.playerCardChallenges = [];
    }
    return obj;
  },
};

function createBaseCMsgClientToGCGetPlayerCardRosterRequest(): CMsgClientToGCGetPlayerCardRosterRequest {
  return { leagueId: 0, fantasyPeriod: 0 };
}

export const CMsgClientToGCGetPlayerCardRosterRequest = {
  encode(message: CMsgClientToGCGetPlayerCardRosterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leagueId !== 0) {
      writer.uint32(8).uint32(message.leagueId);
    }
    if (message.fantasyPeriod !== 0) {
      writer.uint32(24).uint32(message.fantasyPeriod);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetPlayerCardRosterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetPlayerCardRosterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.fantasyPeriod = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCGetPlayerCardRosterRequest {
    return {
      leagueId: isSet(object.leagueId) ? Number(object.leagueId) : 0,
      fantasyPeriod: isSet(object.fantasyPeriod) ? Number(object.fantasyPeriod) : 0,
    };
  },

  toJSON(message: CMsgClientToGCGetPlayerCardRosterRequest): unknown {
    const obj: any = {};
    message.leagueId !== undefined && (obj.leagueId = Math.round(message.leagueId));
    message.fantasyPeriod !== undefined && (obj.fantasyPeriod = Math.round(message.fantasyPeriod));
    return obj;
  },
};

function createBaseCMsgClientToGCGetPlayerCardRosterResponse(): CMsgClientToGCGetPlayerCardRosterResponse {
  return { result: 0, playerCardItemId: [], score: 0, finalized: false, percentile: 0 };
}

export const CMsgClientToGCGetPlayerCardRosterResponse = {
  encode(message: CMsgClientToGCGetPlayerCardRosterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    writer.uint32(18).fork();
    for (const v of message.playerCardItemId) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.score !== 0) {
      writer.uint32(29).float(message.score);
    }
    if (message.finalized === true) {
      writer.uint32(32).bool(message.finalized);
    }
    if (message.percentile !== 0) {
      writer.uint32(45).float(message.percentile);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetPlayerCardRosterResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetPlayerCardRosterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 2:
          if (tag == 16) {
            message.playerCardItemId.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.playerCardItemId.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 3:
          if (tag != 29) {
            break;
          }

          message.score = reader.float();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.finalized = reader.bool();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.percentile = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCGetPlayerCardRosterResponse {
    return {
      result: isSet(object.result) ? cMsgClientToGCGetPlayerCardRosterResponse_ResultFromJSON(object.result) : 0,
      playerCardItemId: Array.isArray(object?.playerCardItemId)
        ? object.playerCardItemId.map((e: any) => String(e))
        : [],
      score: isSet(object.score) ? Number(object.score) : 0,
      finalized: isSet(object.finalized) ? Boolean(object.finalized) : false,
      percentile: isSet(object.percentile) ? Number(object.percentile) : 0,
    };
  },

  toJSON(message: CMsgClientToGCGetPlayerCardRosterResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCGetPlayerCardRosterResponse_ResultToJSON(message.result));
    if (message.playerCardItemId) {
      obj.playerCardItemId = message.playerCardItemId.map((e) => e);
    } else {
      obj.playerCardItemId = [];
    }
    message.score !== undefined && (obj.score = message.score);
    message.finalized !== undefined && (obj.finalized = message.finalized);
    message.percentile !== undefined && (obj.percentile = message.percentile);
    return obj;
  },
};

function createBaseCMsgClientToGCBatchGetPlayerCardRosterRequest(): CMsgClientToGCBatchGetPlayerCardRosterRequest {
  return { leagueTimestamps: [] };
}

export const CMsgClientToGCBatchGetPlayerCardRosterRequest = {
  encode(message: CMsgClientToGCBatchGetPlayerCardRosterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.leagueTimestamps) {
      CMsgClientToGCBatchGetPlayerCardRosterRequest_LeagueTimestamp.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCBatchGetPlayerCardRosterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCBatchGetPlayerCardRosterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.leagueTimestamps.push(
            CMsgClientToGCBatchGetPlayerCardRosterRequest_LeagueTimestamp.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCBatchGetPlayerCardRosterRequest {
    return {
      leagueTimestamps: Array.isArray(object?.leagueTimestamps)
        ? object.leagueTimestamps.map((e: any) =>
          CMsgClientToGCBatchGetPlayerCardRosterRequest_LeagueTimestamp.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: CMsgClientToGCBatchGetPlayerCardRosterRequest): unknown {
    const obj: any = {};
    if (message.leagueTimestamps) {
      obj.leagueTimestamps = message.leagueTimestamps.map((e) =>
        e ? CMsgClientToGCBatchGetPlayerCardRosterRequest_LeagueTimestamp.toJSON(e) : undefined
      );
    } else {
      obj.leagueTimestamps = [];
    }
    return obj;
  },
};

function createBaseCMsgClientToGCBatchGetPlayerCardRosterRequest_LeagueTimestamp(): CMsgClientToGCBatchGetPlayerCardRosterRequest_LeagueTimestamp {
  return { leagueId: 0, fantasyPeriod: 0 };
}

export const CMsgClientToGCBatchGetPlayerCardRosterRequest_LeagueTimestamp = {
  encode(
    message: CMsgClientToGCBatchGetPlayerCardRosterRequest_LeagueTimestamp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.leagueId !== 0) {
      writer.uint32(8).uint32(message.leagueId);
    }
    if (message.fantasyPeriod !== 0) {
      writer.uint32(24).uint32(message.fantasyPeriod);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CMsgClientToGCBatchGetPlayerCardRosterRequest_LeagueTimestamp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCBatchGetPlayerCardRosterRequest_LeagueTimestamp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.fantasyPeriod = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCBatchGetPlayerCardRosterRequest_LeagueTimestamp {
    return {
      leagueId: isSet(object.leagueId) ? Number(object.leagueId) : 0,
      fantasyPeriod: isSet(object.fantasyPeriod) ? Number(object.fantasyPeriod) : 0,
    };
  },

  toJSON(message: CMsgClientToGCBatchGetPlayerCardRosterRequest_LeagueTimestamp): unknown {
    const obj: any = {};
    message.leagueId !== undefined && (obj.leagueId = Math.round(message.leagueId));
    message.fantasyPeriod !== undefined && (obj.fantasyPeriod = Math.round(message.fantasyPeriod));
    return obj;
  },
};

function createBaseCMsgClientToGCBatchGetPlayerCardRosterResponse(): CMsgClientToGCBatchGetPlayerCardRosterResponse {
  return { responses: [] };
}

export const CMsgClientToGCBatchGetPlayerCardRosterResponse = {
  encode(
    message: CMsgClientToGCBatchGetPlayerCardRosterResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.responses) {
      CMsgClientToGCBatchGetPlayerCardRosterResponse_RosterResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCBatchGetPlayerCardRosterResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCBatchGetPlayerCardRosterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.responses.push(
            CMsgClientToGCBatchGetPlayerCardRosterResponse_RosterResponse.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCBatchGetPlayerCardRosterResponse {
    return {
      responses: Array.isArray(object?.responses)
        ? object.responses.map((e: any) => CMsgClientToGCBatchGetPlayerCardRosterResponse_RosterResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientToGCBatchGetPlayerCardRosterResponse): unknown {
    const obj: any = {};
    if (message.responses) {
      obj.responses = message.responses.map((e) =>
        e ? CMsgClientToGCBatchGetPlayerCardRosterResponse_RosterResponse.toJSON(e) : undefined
      );
    } else {
      obj.responses = [];
    }
    return obj;
  },
};

function createBaseCMsgClientToGCBatchGetPlayerCardRosterResponse_RosterResponse(): CMsgClientToGCBatchGetPlayerCardRosterResponse_RosterResponse {
  return {
    leagueId: 0,
    deprecatedTimestamp: 0,
    result: 0,
    playerCardItemId: [],
    score: 0,
    finalized: false,
    percentile: 0,
    fantasyPeriod: 0,
  };
}

export const CMsgClientToGCBatchGetPlayerCardRosterResponse_RosterResponse = {
  encode(
    message: CMsgClientToGCBatchGetPlayerCardRosterResponse_RosterResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.leagueId !== 0) {
      writer.uint32(8).uint32(message.leagueId);
    }
    if (message.deprecatedTimestamp !== 0) {
      writer.uint32(16).uint32(message.deprecatedTimestamp);
    }
    if (message.result !== 0) {
      writer.uint32(24).int32(message.result);
    }
    writer.uint32(34).fork();
    for (const v of message.playerCardItemId) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.score !== 0) {
      writer.uint32(45).float(message.score);
    }
    if (message.finalized === true) {
      writer.uint32(48).bool(message.finalized);
    }
    if (message.percentile !== 0) {
      writer.uint32(61).float(message.percentile);
    }
    if (message.fantasyPeriod !== 0) {
      writer.uint32(64).uint32(message.fantasyPeriod);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CMsgClientToGCBatchGetPlayerCardRosterResponse_RosterResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCBatchGetPlayerCardRosterResponse_RosterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.deprecatedTimestamp = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 4:
          if (tag == 32) {
            message.playerCardItemId.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.playerCardItemId.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 5:
          if (tag != 45) {
            break;
          }

          message.score = reader.float();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.finalized = reader.bool();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.percentile = reader.float();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.fantasyPeriod = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCBatchGetPlayerCardRosterResponse_RosterResponse {
    return {
      leagueId: isSet(object.leagueId) ? Number(object.leagueId) : 0,
      deprecatedTimestamp: isSet(object.deprecatedTimestamp) ? Number(object.deprecatedTimestamp) : 0,
      result: isSet(object.result) ? cMsgClientToGCBatchGetPlayerCardRosterResponse_ResultFromJSON(object.result) : 0,
      playerCardItemId: Array.isArray(object?.playerCardItemId)
        ? object.playerCardItemId.map((e: any) => String(e))
        : [],
      score: isSet(object.score) ? Number(object.score) : 0,
      finalized: isSet(object.finalized) ? Boolean(object.finalized) : false,
      percentile: isSet(object.percentile) ? Number(object.percentile) : 0,
      fantasyPeriod: isSet(object.fantasyPeriod) ? Number(object.fantasyPeriod) : 0,
    };
  },

  toJSON(message: CMsgClientToGCBatchGetPlayerCardRosterResponse_RosterResponse): unknown {
    const obj: any = {};
    message.leagueId !== undefined && (obj.leagueId = Math.round(message.leagueId));
    message.deprecatedTimestamp !== undefined && (obj.deprecatedTimestamp = Math.round(message.deprecatedTimestamp));
    message.result !== undefined &&
      (obj.result = cMsgClientToGCBatchGetPlayerCardRosterResponse_ResultToJSON(message.result));
    if (message.playerCardItemId) {
      obj.playerCardItemId = message.playerCardItemId.map((e) => e);
    } else {
      obj.playerCardItemId = [];
    }
    message.score !== undefined && (obj.score = message.score);
    message.finalized !== undefined && (obj.finalized = message.finalized);
    message.percentile !== undefined && (obj.percentile = message.percentile);
    message.fantasyPeriod !== undefined && (obj.fantasyPeriod = Math.round(message.fantasyPeriod));
    return obj;
  },
};

function createBaseCMsgClientToGCSetPlayerCardRosterRequest(): CMsgClientToGCSetPlayerCardRosterRequest {
  return { leagueId: 0, deprecatedTimestamp: 0, slot: 0, playerCardItemId: "0", eventId: 0, fantasyPeriod: 0 };
}

export const CMsgClientToGCSetPlayerCardRosterRequest = {
  encode(message: CMsgClientToGCSetPlayerCardRosterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leagueId !== 0) {
      writer.uint32(8).uint32(message.leagueId);
    }
    if (message.deprecatedTimestamp !== 0) {
      writer.uint32(16).uint32(message.deprecatedTimestamp);
    }
    if (message.slot !== 0) {
      writer.uint32(24).uint32(message.slot);
    }
    if (message.playerCardItemId !== "0") {
      writer.uint32(32).uint64(message.playerCardItemId);
    }
    if (message.eventId !== 0) {
      writer.uint32(40).uint32(message.eventId);
    }
    if (message.fantasyPeriod !== 0) {
      writer.uint32(48).uint32(message.fantasyPeriod);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSetPlayerCardRosterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSetPlayerCardRosterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.deprecatedTimestamp = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.slot = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.playerCardItemId = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.eventId = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.fantasyPeriod = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCSetPlayerCardRosterRequest {
    return {
      leagueId: isSet(object.leagueId) ? Number(object.leagueId) : 0,
      deprecatedTimestamp: isSet(object.deprecatedTimestamp) ? Number(object.deprecatedTimestamp) : 0,
      slot: isSet(object.slot) ? Number(object.slot) : 0,
      playerCardItemId: isSet(object.playerCardItemId) ? String(object.playerCardItemId) : "0",
      eventId: isSet(object.eventId) ? Number(object.eventId) : 0,
      fantasyPeriod: isSet(object.fantasyPeriod) ? Number(object.fantasyPeriod) : 0,
    };
  },

  toJSON(message: CMsgClientToGCSetPlayerCardRosterRequest): unknown {
    const obj: any = {};
    message.leagueId !== undefined && (obj.leagueId = Math.round(message.leagueId));
    message.deprecatedTimestamp !== undefined && (obj.deprecatedTimestamp = Math.round(message.deprecatedTimestamp));
    message.slot !== undefined && (obj.slot = Math.round(message.slot));
    message.playerCardItemId !== undefined && (obj.playerCardItemId = message.playerCardItemId);
    message.eventId !== undefined && (obj.eventId = Math.round(message.eventId));
    message.fantasyPeriod !== undefined && (obj.fantasyPeriod = Math.round(message.fantasyPeriod));
    return obj;
  },
};

function createBaseCMsgClientToGCSetPlayerCardRosterResponse(): CMsgClientToGCSetPlayerCardRosterResponse {
  return { result: 0 };
}

export const CMsgClientToGCSetPlayerCardRosterResponse = {
  encode(message: CMsgClientToGCSetPlayerCardRosterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSetPlayerCardRosterResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSetPlayerCardRosterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCSetPlayerCardRosterResponse {
    return {
      result: isSet(object.result) ? cMsgClientToGCSetPlayerCardRosterResponse_ResultFromJSON(object.result) : 0,
    };
  },

  toJSON(message: CMsgClientToGCSetPlayerCardRosterResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCSetPlayerCardRosterResponse_ResultToJSON(message.result));
    return obj;
  },
};

function createBaseCMsgDOTAFantasyDPCLeagueStatus(): CMsgDOTAFantasyDPCLeagueStatus {
  return { leagueInfos: [] };
}

export const CMsgDOTAFantasyDPCLeagueStatus = {
  encode(message: CMsgDOTAFantasyDPCLeagueStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.leagueInfos) {
      CMsgDOTAFantasyDPCLeagueStatus_LeagueInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAFantasyDPCLeagueStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAFantasyDPCLeagueStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.leagueInfos.push(CMsgDOTAFantasyDPCLeagueStatus_LeagueInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAFantasyDPCLeagueStatus {
    return {
      leagueInfos: Array.isArray(object?.leagueInfos)
        ? object.leagueInfos.map((e: any) => CMsgDOTAFantasyDPCLeagueStatus_LeagueInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgDOTAFantasyDPCLeagueStatus): unknown {
    const obj: any = {};
    if (message.leagueInfos) {
      obj.leagueInfos = message.leagueInfos.map((e) =>
        e ? CMsgDOTAFantasyDPCLeagueStatus_LeagueInfo.toJSON(e) : undefined
      );
    } else {
      obj.leagueInfos = [];
    }
    return obj;
  },
};

function createBaseCMsgDOTAFantasyDPCLeagueStatus_LeagueInfo(): CMsgDOTAFantasyDPCLeagueStatus_LeagueInfo {
  return { leagueId: 0, leagueName: "", startTimestamp: 0, endTimestamp: 0, dayTimestamps: [], status: 0 };
}

export const CMsgDOTAFantasyDPCLeagueStatus_LeagueInfo = {
  encode(message: CMsgDOTAFantasyDPCLeagueStatus_LeagueInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leagueId !== 0) {
      writer.uint32(8).uint32(message.leagueId);
    }
    if (message.leagueName !== "") {
      writer.uint32(18).string(message.leagueName);
    }
    if (message.startTimestamp !== 0) {
      writer.uint32(24).uint32(message.startTimestamp);
    }
    if (message.endTimestamp !== 0) {
      writer.uint32(32).uint32(message.endTimestamp);
    }
    writer.uint32(42).fork();
    for (const v of message.dayTimestamps) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAFantasyDPCLeagueStatus_LeagueInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAFantasyDPCLeagueStatus_LeagueInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.leagueName = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.startTimestamp = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.endTimestamp = reader.uint32();
          continue;
        case 5:
          if (tag == 40) {
            message.dayTimestamps.push(reader.uint32());
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.dayTimestamps.push(reader.uint32());
            }

            continue;
          }

          break;
        case 8:
          if (tag != 64) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAFantasyDPCLeagueStatus_LeagueInfo {
    return {
      leagueId: isSet(object.leagueId) ? Number(object.leagueId) : 0,
      leagueName: isSet(object.leagueName) ? String(object.leagueName) : "",
      startTimestamp: isSet(object.startTimestamp) ? Number(object.startTimestamp) : 0,
      endTimestamp: isSet(object.endTimestamp) ? Number(object.endTimestamp) : 0,
      dayTimestamps: Array.isArray(object?.dayTimestamps) ? object.dayTimestamps.map((e: any) => Number(e)) : [],
      status: isSet(object.status) ? cMsgDOTAFantasyDPCLeagueStatus_ERosterStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: CMsgDOTAFantasyDPCLeagueStatus_LeagueInfo): unknown {
    const obj: any = {};
    message.leagueId !== undefined && (obj.leagueId = Math.round(message.leagueId));
    message.leagueName !== undefined && (obj.leagueName = message.leagueName);
    message.startTimestamp !== undefined && (obj.startTimestamp = Math.round(message.startTimestamp));
    message.endTimestamp !== undefined && (obj.endTimestamp = Math.round(message.endTimestamp));
    if (message.dayTimestamps) {
      obj.dayTimestamps = message.dayTimestamps.map((e) => Math.round(e));
    } else {
      obj.dayTimestamps = [];
    }
    message.status !== undefined && (obj.status = cMsgDOTAFantasyDPCLeagueStatus_ERosterStatusToJSON(message.status));
    return obj;
  },
};

function createBaseCMsgDOTADPCSearchResults(): CMsgDOTADPCSearchResults {
  return { players: [], teams: [], leagues: [] };
}

export const CMsgDOTADPCSearchResults = {
  encode(message: CMsgDOTADPCSearchResults, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.players) {
      CMsgDOTADPCSearchResults_Player.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.teams) {
      CMsgDOTADPCSearchResults_Team.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.leagues) {
      CMsgDOTADPCSearchResults_League.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTADPCSearchResults {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTADPCSearchResults();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.players.push(CMsgDOTADPCSearchResults_Player.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.teams.push(CMsgDOTADPCSearchResults_Team.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.leagues.push(CMsgDOTADPCSearchResults_League.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTADPCSearchResults {
    return {
      players: Array.isArray(object?.players)
        ? object.players.map((e: any) => CMsgDOTADPCSearchResults_Player.fromJSON(e))
        : [],
      teams: Array.isArray(object?.teams)
        ? object.teams.map((e: any) => CMsgDOTADPCSearchResults_Team.fromJSON(e))
        : [],
      leagues: Array.isArray(object?.leagues)
        ? object.leagues.map((e: any) => CMsgDOTADPCSearchResults_League.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgDOTADPCSearchResults): unknown {
    const obj: any = {};
    if (message.players) {
      obj.players = message.players.map((e) => e ? CMsgDOTADPCSearchResults_Player.toJSON(e) : undefined);
    } else {
      obj.players = [];
    }
    if (message.teams) {
      obj.teams = message.teams.map((e) => e ? CMsgDOTADPCSearchResults_Team.toJSON(e) : undefined);
    } else {
      obj.teams = [];
    }
    if (message.leagues) {
      obj.leagues = message.leagues.map((e) => e ? CMsgDOTADPCSearchResults_League.toJSON(e) : undefined);
    } else {
      obj.leagues = [];
    }
    return obj;
  },
};

function createBaseCMsgDOTADPCSearchResults_Player(): CMsgDOTADPCSearchResults_Player {
  return { id: 0, name: "", realName: "" };
}

export const CMsgDOTADPCSearchResults_Player = {
  encode(message: CMsgDOTADPCSearchResults_Player, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.realName !== "") {
      writer.uint32(26).string(message.realName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTADPCSearchResults_Player {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTADPCSearchResults_Player();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.realName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTADPCSearchResults_Player {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      realName: isSet(object.realName) ? String(object.realName) : "",
    };
  },

  toJSON(message: CMsgDOTADPCSearchResults_Player): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.realName !== undefined && (obj.realName = message.realName);
    return obj;
  },
};

function createBaseCMsgDOTADPCSearchResults_Team(): CMsgDOTADPCSearchResults_Team {
  return { id: 0, name: "", url: "" };
}

export const CMsgDOTADPCSearchResults_Team = {
  encode(message: CMsgDOTADPCSearchResults_Team, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.url !== "") {
      writer.uint32(26).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTADPCSearchResults_Team {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTADPCSearchResults_Team();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.url = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTADPCSearchResults_Team {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      url: isSet(object.url) ? String(object.url) : "",
    };
  },

  toJSON(message: CMsgDOTADPCSearchResults_Team): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },
};

function createBaseCMsgDOTADPCSearchResults_League(): CMsgDOTADPCSearchResults_League {
  return { id: 0, name: "" };
}

export const CMsgDOTADPCSearchResults_League = {
  encode(message: CMsgDOTADPCSearchResults_League, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTADPCSearchResults_League {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTADPCSearchResults_League();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTADPCSearchResults_League {
    return { id: isSet(object.id) ? Number(object.id) : 0, name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: CMsgDOTADPCSearchResults_League): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
};

function createBaseCMsgDOTADPCTeamFavoriteRankings(): CMsgDOTADPCTeamFavoriteRankings {
  return { teams: [] };
}

export const CMsgDOTADPCTeamFavoriteRankings = {
  encode(message: CMsgDOTADPCTeamFavoriteRankings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.teams) {
      CMsgDOTADPCTeamFavoriteRankings_Team.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTADPCTeamFavoriteRankings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTADPCTeamFavoriteRankings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.teams.push(CMsgDOTADPCTeamFavoriteRankings_Team.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTADPCTeamFavoriteRankings {
    return {
      teams: Array.isArray(object?.teams)
        ? object.teams.map((e: any) => CMsgDOTADPCTeamFavoriteRankings_Team.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgDOTADPCTeamFavoriteRankings): unknown {
    const obj: any = {};
    if (message.teams) {
      obj.teams = message.teams.map((e) => e ? CMsgDOTADPCTeamFavoriteRankings_Team.toJSON(e) : undefined);
    } else {
      obj.teams = [];
    }
    return obj;
  },
};

function createBaseCMsgDOTADPCTeamFavoriteRankings_Team(): CMsgDOTADPCTeamFavoriteRankings_Team {
  return { teamId: 0, favorites: 0 };
}

export const CMsgDOTADPCTeamFavoriteRankings_Team = {
  encode(message: CMsgDOTADPCTeamFavoriteRankings_Team, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.teamId !== 0) {
      writer.uint32(8).uint32(message.teamId);
    }
    if (message.favorites !== 0) {
      writer.uint32(16).uint32(message.favorites);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTADPCTeamFavoriteRankings_Team {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTADPCTeamFavoriteRankings_Team();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.favorites = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTADPCTeamFavoriteRankings_Team {
    return {
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      favorites: isSet(object.favorites) ? Number(object.favorites) : 0,
    };
  },

  toJSON(message: CMsgDOTADPCTeamFavoriteRankings_Team): unknown {
    const obj: any = {};
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.favorites !== undefined && (obj.favorites = Math.round(message.favorites));
    return obj;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
