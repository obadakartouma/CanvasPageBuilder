import React from 'react'
import hellmann from '../../../theme2/Prof Hellmann präsentiert Laptop.png'

export default function Kontakt() {
  return (
    <div class='kontakt'>
        <div class = 'kontakttitel'>Ansprechpartner</div>
        <div class = 'kontaktbody'>

            <div class = 'kontaktcontainer'>
                <div class = 'kontaktbild'></div>
                <div class = 'kontaktstatus textcenter saoswaldlight'>Dozent</div>
                <div class = 'kontaktname textcenter saoswaldlight'>Name Nachname</div>
                <div class = 'kontaktbeschreibung textcenter saoswaldlight'>Beschreibung</div>
                <div class = 'kontaktemail textcenter saoswaldlight'>name.nachname@hs-aalen.de</div>
            </div>


            <div class = 'kontaktcontainer'>
                <div class = 'kontaktbild'></div>
                <div class = 'kontaktstatus textcenter saoswaldlight'>Studiengangmanager</div>
                <div class = 'kontaktname textcenter textthick saoswaldlight'>Name Nachname</div>
                <div class = 'kontaktbeschreibung textcenter saoswaldlight'>Beschreibung</div>
                <div class = 'kontaktemail textcenter saoswaldlight'>name.nachname@hs-aalen.de</div>
            </div>


            <div class = 'hellmann'>
                <img class = 'hellmann' src={hellmann}></img>
            </div>
        </div>
    </div>
  )
}
