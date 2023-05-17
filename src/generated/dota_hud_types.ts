/* eslint-disable */

export enum EHeroSelectionText {
  k_EHeroSelectionText_Invalid = -1,
  k_EHeroSelectionText_None = 0,
  k_EHeroSelectionText_ChooseHero = 1,
  k_EHeroSelectionText_AllDraft_Planning_YouFirst = 2,
  k_EHeroSelectionText_AllDraft_Planning_TheyFirst = 3,
  k_EHeroSelectionText_AllDraft_Banning = 4,
  k_EHeroSelectionText_AllDraft_Ban_Waiting = 5,
  k_EHeroSelectionText_AllDraft_PickTwo = 6,
  k_EHeroSelectionText_AllDraft_PickOneMore = 7,
  k_EHeroSelectionText_AllDraft_PickOne = 8,
  k_EHeroSelectionText_AllDraft_WaitingRadiant = 9,
  k_EHeroSelectionText_AllDraft_WaitingDire = 10,
  k_EHeroSelectionText_AllDraft_TeammateRandomed = 11,
  k_EHeroSelectionText_AllDraft_YouPicking_LosingGold = 12,
  k_EHeroSelectionText_AllDraft_TheyPicking_LosingGold = 13,
  k_EHeroSelectionText_CaptainsMode_ChooseCaptain = 14,
  k_EHeroSelectionText_CaptainsMode_WaitingForChooseCaptain = 15,
  k_EHeroSelectionText_CaptainsMode_YouSelect = 16,
  k_EHeroSelectionText_CaptainsMode_TheySelect = 17,
  k_EHeroSelectionText_CaptainsMode_YouBan = 18,
  k_EHeroSelectionText_CaptainsMode_TheyBan = 19,
  k_EHeroSelectionText_RandomDraft_HeroReview = 20,
  k_EHeroSelectionText_RandomDraft_RoundDisplay = 21,
  k_EHeroSelectionText_RandomDraft_Waiting = 22,
  k_EHeroSelectionText_EventGame_BanPhase = 23,
}

export function eHeroSelectionTextFromJSON(object: any): EHeroSelectionText {
  switch (object) {
    case -1:
    case "k_EHeroSelectionText_Invalid":
      return EHeroSelectionText.k_EHeroSelectionText_Invalid;
    case 0:
    case "k_EHeroSelectionText_None":
      return EHeroSelectionText.k_EHeroSelectionText_None;
    case 1:
    case "k_EHeroSelectionText_ChooseHero":
      return EHeroSelectionText.k_EHeroSelectionText_ChooseHero;
    case 2:
    case "k_EHeroSelectionText_AllDraft_Planning_YouFirst":
      return EHeroSelectionText.k_EHeroSelectionText_AllDraft_Planning_YouFirst;
    case 3:
    case "k_EHeroSelectionText_AllDraft_Planning_TheyFirst":
      return EHeroSelectionText.k_EHeroSelectionText_AllDraft_Planning_TheyFirst;
    case 4:
    case "k_EHeroSelectionText_AllDraft_Banning":
      return EHeroSelectionText.k_EHeroSelectionText_AllDraft_Banning;
    case 5:
    case "k_EHeroSelectionText_AllDraft_Ban_Waiting":
      return EHeroSelectionText.k_EHeroSelectionText_AllDraft_Ban_Waiting;
    case 6:
    case "k_EHeroSelectionText_AllDraft_PickTwo":
      return EHeroSelectionText.k_EHeroSelectionText_AllDraft_PickTwo;
    case 7:
    case "k_EHeroSelectionText_AllDraft_PickOneMore":
      return EHeroSelectionText.k_EHeroSelectionText_AllDraft_PickOneMore;
    case 8:
    case "k_EHeroSelectionText_AllDraft_PickOne":
      return EHeroSelectionText.k_EHeroSelectionText_AllDraft_PickOne;
    case 9:
    case "k_EHeroSelectionText_AllDraft_WaitingRadiant":
      return EHeroSelectionText.k_EHeroSelectionText_AllDraft_WaitingRadiant;
    case 10:
    case "k_EHeroSelectionText_AllDraft_WaitingDire":
      return EHeroSelectionText.k_EHeroSelectionText_AllDraft_WaitingDire;
    case 11:
    case "k_EHeroSelectionText_AllDraft_TeammateRandomed":
      return EHeroSelectionText.k_EHeroSelectionText_AllDraft_TeammateRandomed;
    case 12:
    case "k_EHeroSelectionText_AllDraft_YouPicking_LosingGold":
      return EHeroSelectionText.k_EHeroSelectionText_AllDraft_YouPicking_LosingGold;
    case 13:
    case "k_EHeroSelectionText_AllDraft_TheyPicking_LosingGold":
      return EHeroSelectionText.k_EHeroSelectionText_AllDraft_TheyPicking_LosingGold;
    case 14:
    case "k_EHeroSelectionText_CaptainsMode_ChooseCaptain":
      return EHeroSelectionText.k_EHeroSelectionText_CaptainsMode_ChooseCaptain;
    case 15:
    case "k_EHeroSelectionText_CaptainsMode_WaitingForChooseCaptain":
      return EHeroSelectionText.k_EHeroSelectionText_CaptainsMode_WaitingForChooseCaptain;
    case 16:
    case "k_EHeroSelectionText_CaptainsMode_YouSelect":
      return EHeroSelectionText.k_EHeroSelectionText_CaptainsMode_YouSelect;
    case 17:
    case "k_EHeroSelectionText_CaptainsMode_TheySelect":
      return EHeroSelectionText.k_EHeroSelectionText_CaptainsMode_TheySelect;
    case 18:
    case "k_EHeroSelectionText_CaptainsMode_YouBan":
      return EHeroSelectionText.k_EHeroSelectionText_CaptainsMode_YouBan;
    case 19:
    case "k_EHeroSelectionText_CaptainsMode_TheyBan":
      return EHeroSelectionText.k_EHeroSelectionText_CaptainsMode_TheyBan;
    case 20:
    case "k_EHeroSelectionText_RandomDraft_HeroReview":
      return EHeroSelectionText.k_EHeroSelectionText_RandomDraft_HeroReview;
    case 21:
    case "k_EHeroSelectionText_RandomDraft_RoundDisplay":
      return EHeroSelectionText.k_EHeroSelectionText_RandomDraft_RoundDisplay;
    case 22:
    case "k_EHeroSelectionText_RandomDraft_Waiting":
      return EHeroSelectionText.k_EHeroSelectionText_RandomDraft_Waiting;
    case 23:
    case "k_EHeroSelectionText_EventGame_BanPhase":
      return EHeroSelectionText.k_EHeroSelectionText_EventGame_BanPhase;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EHeroSelectionText");
  }
}

export function eHeroSelectionTextToJSON(object: EHeroSelectionText): string {
  switch (object) {
    case EHeroSelectionText.k_EHeroSelectionText_Invalid:
      return "k_EHeroSelectionText_Invalid";
    case EHeroSelectionText.k_EHeroSelectionText_None:
      return "k_EHeroSelectionText_None";
    case EHeroSelectionText.k_EHeroSelectionText_ChooseHero:
      return "k_EHeroSelectionText_ChooseHero";
    case EHeroSelectionText.k_EHeroSelectionText_AllDraft_Planning_YouFirst:
      return "k_EHeroSelectionText_AllDraft_Planning_YouFirst";
    case EHeroSelectionText.k_EHeroSelectionText_AllDraft_Planning_TheyFirst:
      return "k_EHeroSelectionText_AllDraft_Planning_TheyFirst";
    case EHeroSelectionText.k_EHeroSelectionText_AllDraft_Banning:
      return "k_EHeroSelectionText_AllDraft_Banning";
    case EHeroSelectionText.k_EHeroSelectionText_AllDraft_Ban_Waiting:
      return "k_EHeroSelectionText_AllDraft_Ban_Waiting";
    case EHeroSelectionText.k_EHeroSelectionText_AllDraft_PickTwo:
      return "k_EHeroSelectionText_AllDraft_PickTwo";
    case EHeroSelectionText.k_EHeroSelectionText_AllDraft_PickOneMore:
      return "k_EHeroSelectionText_AllDraft_PickOneMore";
    case EHeroSelectionText.k_EHeroSelectionText_AllDraft_PickOne:
      return "k_EHeroSelectionText_AllDraft_PickOne";
    case EHeroSelectionText.k_EHeroSelectionText_AllDraft_WaitingRadiant:
      return "k_EHeroSelectionText_AllDraft_WaitingRadiant";
    case EHeroSelectionText.k_EHeroSelectionText_AllDraft_WaitingDire:
      return "k_EHeroSelectionText_AllDraft_WaitingDire";
    case EHeroSelectionText.k_EHeroSelectionText_AllDraft_TeammateRandomed:
      return "k_EHeroSelectionText_AllDraft_TeammateRandomed";
    case EHeroSelectionText.k_EHeroSelectionText_AllDraft_YouPicking_LosingGold:
      return "k_EHeroSelectionText_AllDraft_YouPicking_LosingGold";
    case EHeroSelectionText.k_EHeroSelectionText_AllDraft_TheyPicking_LosingGold:
      return "k_EHeroSelectionText_AllDraft_TheyPicking_LosingGold";
    case EHeroSelectionText.k_EHeroSelectionText_CaptainsMode_ChooseCaptain:
      return "k_EHeroSelectionText_CaptainsMode_ChooseCaptain";
    case EHeroSelectionText.k_EHeroSelectionText_CaptainsMode_WaitingForChooseCaptain:
      return "k_EHeroSelectionText_CaptainsMode_WaitingForChooseCaptain";
    case EHeroSelectionText.k_EHeroSelectionText_CaptainsMode_YouSelect:
      return "k_EHeroSelectionText_CaptainsMode_YouSelect";
    case EHeroSelectionText.k_EHeroSelectionText_CaptainsMode_TheySelect:
      return "k_EHeroSelectionText_CaptainsMode_TheySelect";
    case EHeroSelectionText.k_EHeroSelectionText_CaptainsMode_YouBan:
      return "k_EHeroSelectionText_CaptainsMode_YouBan";
    case EHeroSelectionText.k_EHeroSelectionText_CaptainsMode_TheyBan:
      return "k_EHeroSelectionText_CaptainsMode_TheyBan";
    case EHeroSelectionText.k_EHeroSelectionText_RandomDraft_HeroReview:
      return "k_EHeroSelectionText_RandomDraft_HeroReview";
    case EHeroSelectionText.k_EHeroSelectionText_RandomDraft_RoundDisplay:
      return "k_EHeroSelectionText_RandomDraft_RoundDisplay";
    case EHeroSelectionText.k_EHeroSelectionText_RandomDraft_Waiting:
      return "k_EHeroSelectionText_RandomDraft_Waiting";
    case EHeroSelectionText.k_EHeroSelectionText_EventGame_BanPhase:
      return "k_EHeroSelectionText_EventGame_BanPhase";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EHeroSelectionText");
  }
}

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
