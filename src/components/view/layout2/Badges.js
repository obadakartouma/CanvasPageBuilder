import React from 'react';
import { Badges as badges } from "../../../services/atoms";
import { useRecoilValue } from "recoil";

export default function Badges() {
  const BadgesObject = useRecoilValue(badges);
  let badgestext = 'Badges sind digitale Lernabzeichen, die Sie in diesem Kurs als Nachweis für Ihr erlerntes Wissen sammeln können. Sobald Sie ein Learning Nugget beendet haben, markieren Sie dieses als "fertig". Nachdem Sie die zugehörige Aufgabe eingereicht haben, erhalten Sie den jeweiligen Badge und schalten das nächste Nugget frei. Links unter dem Reiter "Badges" finden Sie eine Übersicht über alle erreichbaren Abzeichen und können Ihren Fortschritt anhand des Leaderboards mit dem der anderen Teilnehmer vergleichen.';
  let badgestitel = 'Was sind Badges';

  return (
  <div classname = "vBadgesContainer">
      <div className='vBadgesTitel'>
        {
          BadgesObject.title
          ? BadgesObject.title
          : badgestitel
        }
      </div>
      <div className='vBadgesInhaltsText'>
        {
          BadgesObject.text
          ? BadgesObject.text
          : badgestext
        }
        </div>
  </div>
  );
}
