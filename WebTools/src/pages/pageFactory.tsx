﻿import * as React from 'react';
import {character} from '../common/character';
import {EraSelectionPage} from './eraSelectionPage';
import {ToolSelectionPage} from './toolSelectionPage';
import {SpeciesPage} from './speciesPage';
import {SpeciesDetailsPage} from './speciesDetailsPage';
import {EnvironmentPage} from './environmentPage';
import {EnvironmentDetailsPage} from './environmentDetailsPage';
import {UpbringingPage} from './upbringingPage';
import {UpbringingDetailsPage} from './upbringingDetailsPage';
import {StarfleetAcademyPage} from './starfleetAcademyPage';
import {StarfleetAcademyDetailsPage} from './starfleetAcademyDetailsPage';
import {CareerPage} from './careerPage';
import {CareerDetailsPage} from './careerDetailsPage';
import {CareerEventPage} from './careerEventPage';
import {CareerEventDetailsPage} from './careerEventDetailsPage';
import {AttributesAndDisciplinesPage} from './attributesAndDisciplinesPage';
import {FinishPage} from './finishPage';
import {StarshipPage} from './starshipPage';
import {SupportingCharacterPage} from './supportingCharacterPage';
import {ExportTestPage} from './exportTestPage';
import { TalentsOverviewPage } from './talentsOverviewPage';
import { SelectionPage } from './selectionPage';

export enum PageIdentity {
    Selection,
    Era,
    ToolSelecton,
    Species,
    SpeciesDetails,
    Environment,
    EnvironmentDetails,
    Upbringing,
    UpbringingDetails,
    StarfleetAcademy,
    StarfleetAcademyDetails,
    Career,
    CareerDetails,
    CareerEvent1,
    CareerEvent1Details,
    CareerEvent2,
    CareerEvent2Details,
    AttributesAndDisciplines,
    Finish,

    Starship,
    SupportingCharacter,
    TalentsOverview,

    ExportTest
}

export interface IPageProperties {
}

export class PageFactory {
    private factories = {};

    constructor() {
        this.factories = {};

        this.factories[PageIdentity.Selection] = () => <SelectionPage />;
        this.factories[PageIdentity.Era] = () => <EraSelectionPage/>;
        this.factories[PageIdentity.ToolSelecton] = () => <ToolSelectionPage/>;
        this.factories[PageIdentity.Species] = () => <SpeciesPage/>;
        this.factories[PageIdentity.SpeciesDetails] = () => <SpeciesDetailsPage/>;
        this.factories[PageIdentity.Environment] = () => <EnvironmentPage/>;
        this.factories[PageIdentity.EnvironmentDetails] = () => <EnvironmentDetailsPage/>;
        this.factories[PageIdentity.Upbringing] = () => <UpbringingPage/>;
        this.factories[PageIdentity.UpbringingDetails] = () => <UpbringingDetailsPage/>;
        this.factories[PageIdentity.StarfleetAcademy] = () => <StarfleetAcademyPage/>;
        this.factories[PageIdentity.StarfleetAcademyDetails] = () => <StarfleetAcademyDetailsPage/>;
        this.factories[PageIdentity.Career] = () => <CareerPage/>;
        this.factories[PageIdentity.CareerDetails] = () => <CareerDetailsPage/>;
        this.factories[PageIdentity.CareerEvent1] = () => <CareerEventPage/>;
        this.factories[PageIdentity.CareerEvent1Details] = () => <CareerEventDetailsPage/>;
        this.factories[PageIdentity.CareerEvent2] = () => <CareerEventPage/>;
        this.factories[PageIdentity.CareerEvent2Details] = () => <CareerEventDetailsPage/>;
        this.factories[PageIdentity.AttributesAndDisciplines] = () => <AttributesAndDisciplinesPage/>;
        this.factories[PageIdentity.Finish] = () => <FinishPage/>;
        this.factories[PageIdentity.Starship] = () => <StarshipPage/>;
        this.factories[PageIdentity.SupportingCharacter] = () => <SupportingCharacterPage />;
        this.factories[PageIdentity.TalentsOverview] = () => <TalentsOverviewPage />;
        this.factories[PageIdentity.ExportTest] = () => <ExportTestPage/>;
    }

    createPage(page: PageIdentity) {
        const factory = this.factories[page];
        if (!factory) {
            console.error(`Unable to find a page factory for ${PageIdentity[page]}`);
        }

        character.update();

        return factory ? factory() : undefined;
    }

    isFullscreen(page: PageIdentity) {
        if (page === PageIdentity.Finish) {
            return true;
        }

        return false;
    }
}