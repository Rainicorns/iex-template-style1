import React from 'react';
import './Expose.scss';
import { css, cx } from 'emotion'
import { basetheme as theme } from './styles/IEXTheme'

import FrontCover from './sections/FrontCover/FrontCover';
import FactSheet from './sections/FactSheet/FactSheet';
import TextPage from './sections/TextPage/TextPage';
import PicturePages from './sections/PicturePages/PicturePages';
import FloorPlans from './sections/FloorPlans/FloorPlans';
import AgentDetail from './sections/AgentDetail/AgentDetail';
import Fact from './sections/FactSheet/Fact';

function App() {



  return (
    <>
      <FrontCover theme={theme} />
      <FactSheet title="Wichtiges auf einen Blick" theme={theme}>
        <Fact theme={theme} label="Objekttyp" value="Doppelhaushälfte" />
        <Fact theme={theme} label="Wohnfläche" value="ca. 305 m2" />
        <Fact theme={theme} label="Grundstücksfläche" value=" ca. 1480 m2" />
        <Fact theme={theme} label="Anzahl Zimmer" value="4" />
        <Fact theme={theme} label="Anzahl Terrassen" value="3" />
        <Fact theme={theme} label="Anzahl Badezimmer" value="" />
        <Fact theme={theme} label="Gäste-WC " value="Ja" />
        <Fact theme={theme} label="Heizungsart" value="Zentralheizung" />
        <Fact theme={theme} label="ImmoNr" value="6068" />
        <Fact theme={theme} label="Straße" value="Kammerkoppel" />
        <Fact theme={theme} label="Hausnummer" value="29 a" />
        <Fact theme={theme} label="PLZ" value="24222" />
        <Fact theme={theme} label="Ort" value="Schwentinental" />
        <Fact theme={theme} label="Land" value="Deutschland" />
        <Fact theme={theme} label="Energieausweis" value="Bedarfsausweis" />
        <Fact theme={theme} label="Endenergiebedarf" value="111 kWh/(m2*a)" />
        <Fact theme={theme} label="Energieausweis gültig bis" value="02.10.2028" />
        <Fact theme={theme} label="Baujahr lt. Energieausweis" value="1993" />
        <Fact theme={theme} label="wesentlicher Energieträger" value="Gas" />
        <Fact theme={theme} label="Baujahr Immobilie" value="1993" />
        <Fact theme={theme} label="Kaufpreis" value="279.000,00 e" />
        <Fact theme={theme} label="Käufer-Provision" value="4,76%" />
      </FactSheet>
      <TextPage title="Die Immobilie" theme={theme}>
        <p>
          Diese wunderschöne und toll gepflegte Doppelhaushälfte liegt in Sackgassenendlage
          der schönen Stadt Schwentinental im Ortsteil Klausdorf.
        </p>
        <p>
          Die Immobilie wurde 1993 in massiver Bauweise errichtet. Das Haus wurde von den Besitzern liebevoll gepflegt und nach und nach modernisiert. Zuletzt wurden kostenintensive
          Modernisierungen der Heizung und des Gäste-WCs sowie die Erneuerung der Küche
          durchgeführt. Ebenfalls wurden bereits einige Fenster sowie Bodenbeläge erneuert, sodass der Zustand als modern zu bezeichnen ist.
        </p>
        <p>
          Herzstück des Hauses ist das große Wohn- und Esszimmer mit dem Kaminofen, der an
          kalten Tagen wohlige Wärme verbreitet. Dank der Süd-West Ausrichtung und der bodentiefen Fensterelemente ist dieser Raum herrlich hell.
        </p>
        <p>
          Die moderne Küche ist ein Traum für jeden Kochbegeisterten. Dank der Nähe zum großen
          Hauswirtschaftsraum sind die Wege zu den Einkäufen kurz. Der Eingangsflur und ein
          Gäste-WC komplettieren diese Ebene.
        </p>
        <p>
          Über eine massive Treppe gelangen Sie in das Dachgeschoss. Dort befinden sich ein
          helles Schlafzimmer, zwei weitere individuell nutzbare Zimmer (Kinderzimmer / Büro)
          und das Vollbad mit Badewanne, Dusche und Tageslichtfenster aus dem Baujahr. Die
          Nutzfläche im Spitzoden wurde nachträglich wohnlich ausgebaut und mit 10 qm bei
          der Wohnflächenberechnung berücksichtigt. Dieser großzügige Raum wurde zuletzt als
          Schlafzimmer genutzt. Die genaue Raumaufteilung entnehmen Sie bitte den Grundrisszeichnungen.
        </p>
        <p>
          Das perfekte Zuhause für eine Familie. Eine nette Nachbarschaft, tolle Infrastruktur und
          die Gelassenheit der Vorstadt sind inklusive.
        </p>
        <p>
          Der Außenbereich erwartet Sie mit einem schön angelegten Garten und mit einer nach
          Süd-West ausgerichteten Terrasse. Hier kann man die Hektik des Alltags hinter sich lassen und den Blick in den kleinen, grünen Garten genießen. Direkt hinter dem Grundstück
          befindet sich die Landesstraße 52 die Schwentinental und den Kieler Stadtteil Wellingdorf verbindet.
        </p>
        <p>
          Vereinbaren Sie einen Besichtigungstermin mit uns!
        </p>
      </TextPage>
      <TextPage title="Ausstattungsbeschreibung" theme={theme}>
        <h2>ALLGEMEINE AUSSTATTUNGSMERKMALE:</h2>
        <ul>
          <li>Doppelhaushälfte in Massivbauweise</li>
          <li>Schönes Grundstück</li>
          <li>Moderne Gasheizung (2015)</li>
          <li>Kunststofffenster</li>
          <li>Teilweise Rollläden</li>
          <li>Große Terrasse</li>
          <li>Garage und ein Stellplatz im Carport</li>
          <li>Schuppen für Gartengeräte, Fahrräder und Gartenmöbel</li>
          <li>Weiteres Gartenhaus</li>
          <li>Das Haus ist nach WEG geteilt</li>
        </ul>

        <h2>AUFTEILUNG ERDGESCHOSS:</h2>
        <ul>
          <li>Flur mit Platz für eine Garderobe</li>
          <li>Voll ausgestattete, moderne Küche</li>
          <li>Großes Wohn- und Esszimmer mit Kaminofen und Zugang zur Terrasse und dem Garten</li>
          <li>Modernes Gäste-WC</li>
          <li>Großer Hauswirtschaftsraum mit Waschmaschinenanschluss & Co.</li>
        </ul>

        <h2>AUFTEILUNG DACHGESCHOSS:</h2>
        <ul>
          <li>Großes Schlafzimmer</li>
          <li>Zwei individuell nutzbare Zimmer (Kinderzimmer, Gästezimmer, Büro, etc.)</li>
          <li>Vollbad mit Badewanne, Dusche und Tageslichtfenster</li>
          <li>Zugang zum wohnlich ausgebauten Spitzboden mit viel Nutzfläche</li>
        </ul>
      </TextPage>
      <TextPage title="Die Lage" theme={theme}>
        <p>
          Der Ortsteil Klausdorf der Stadt Schwentinental zählt zu den beliebtesten Wohnlagen im
          direkten Umkreis der Landeshauptstadt Kiel. Es werden eine hervorragende Infrastruktur, ein gutes Ärzte- und Schulnetz sowie sehr gute Einkaufsmöglichkeiten geboten. Der
          Ostseepark gilt als das größte Fachmarktzentrum Deutschlands und bietet durch seine Vielfältigkeit Einkaufsmöglichkeiten für jeden Bedarf. Discounter, Supermärkte, Baumärkte, Elektrofachgeschäfte - hier finden Sie alles! Ebenfalls erreichen Sie in unmittelbarer Nähe viele Wanderwege durch Felder und Wiesen sowie Wälder und Seen. Das
          Schwentinental und der Schwentinepark mit seinem Tiergehege, Abenteuerspielplatz
          und dem Freibad, sind beliebte Ausflugsziele für Jung und Alt.
        </p>
        <p>
          Das Sport- und Freizeitangebot ist ebenfalls sehr gut und bietet vielfältige Möglichkeiten
          für die Freizeitgestaltung.
        </p>
        <p>
          Der Stadtteil Klausdorf hat sich Ruhe und die Freundlichkeit eines Dorfes bewahrt, bietet
          alle Annehmlichkeiten einer Kleinstadt. Sie sind in 10 Minuten in der Kieler Innenstadt. In
          Klausdorf werden Sie sich wohl fühlen!
        </p>
      </TextPage>
      <PicturePages theme={theme}></PicturePages>
      <FloorPlans theme={theme}></FloorPlans>
      <AgentDetail theme={theme}></AgentDetail>

    </>
  );
}

export default App;
