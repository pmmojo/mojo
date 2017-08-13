import { CumulativeSuccessService } from "./cumulative-success-service.service";
import { Project } from "../../../projects/models/project.interface";
import { Threat } from "../../../threats/models/threat.interface";


describe('CumulativeSuccessService', () => {
    const cumulativeSuccessService = CumulativeSuccessService;

    describe('setThreatsCumulativeSuccess()', () => {
        let project = new Project();

        beforeEach(function () {
            project = new Project();
        });

        it('should return an empty list of threats when empty threats list passed in', () => {
            project.threats = [];
            const returnedThreats = cumulativeSuccessService.setThreatsCumulativeSuccess(project.threats)
            expect(returnedThreats).toBeTruthy();
            expect(returnedThreats.length).toBe(0);
        });

        it('should return an empty list of threats when undefined list passed in', () => {
            project.threats = undefined;
            const returnedThreats = cumulativeSuccessService.setThreatsCumulativeSuccess(project.threats)
            expect(returnedThreats).toBeTruthy();
            expect(returnedThreats.length).toBe(0);
        });

        it('should return an empty list of threats when null list passed in', () => {
            project.threats = null;
            const returnedThreats = cumulativeSuccessService.setThreatsCumulativeSuccess(project.threats)
            expect(returnedThreats).toBeTruthy();
            expect(returnedThreats.length).toBe(0);
        });

        it('should return an list of 1 threats when list of 1 threats passed in', () => {
            const threat1 = new Threat();
            threat1.title = "Threat 1";

            project.threats = [threat1];

            const returnedThreats = cumulativeSuccessService.setThreatsCumulativeSuccess(project.threats)

            expect(returnedThreats).toBeTruthy();
            expect(returnedThreats.length).toBe(1);
            expect(returnedThreats[0].title).toBe(threat1.title);
        });

        it('should return an list of 2 threats when list of 2 threats passed in', () => {
            const threat1 = new Threat();
            threat1.title = "Threat 1";

            const threat2 = new Threat();
            threat2.title = "Threat 2";

            project.threats = [threat1, threat2];

            const returnedThreats = cumulativeSuccessService.setThreatsCumulativeSuccess(project.threats)

            expect(returnedThreats).toBeTruthy();
            expect(returnedThreats.length).toBe(2);
            expect(returnedThreats[0].title).toBe(threat1.title);
            expect(returnedThreats[1].title).toBe(threat2.title);
        });

        it('should return an list of threats ordered by the threat score with the lowest values first in the list', () => {
            //arrange
            const threat1 = new Threat();
            threat1.title = "Threat 1";
            threat1.score = 0.4

            const threat2 = new Threat();
            threat2.title = "Threat 2";
            threat2.score = 0.3

            const threat3 = new Threat();
            threat3.title = "Threat 3";
            threat3.score = 0.2

            const threat4 = new Threat();
            threat4.title = "Threat 4";
            threat4.score = 0.1

            project.threats = [threat1, threat2, threat3, threat4];
            
            //act
            const returnedThreats = cumulativeSuccessService.setThreatsCumulativeSuccess(project.threats)

            //assert
            expect(returnedThreats).toBeTruthy();
            expect(returnedThreats.length).toBe(4);
            expect(returnedThreats[0].title).toBe(threat4.title);
            expect(returnedThreats[1].title).toBe(threat3.title);
            expect(returnedThreats[2].title).toBe(threat2.title);
            expect(returnedThreats[3].title).toBe(threat1.title);
        });

        it('should return an list of threats ordered threats score with the correct cumulative level of success caluclated for each threat', () => {
            //arrange
            const threat1 = new Threat();
            threat1.title = "Threat 1";            
            threat1.score = 0.25

            const threat2 = new Threat();
            threat2.title = "Threat 2";            
            threat2.score = 0.35

            const threat3 = new Threat();
            threat3.title = "Threat 3";            
            threat3.score = 0.5

            const threat4 = new Threat();
            threat4.title = "Threat 4";            
            threat4.score = 0.6

            const threat5 = new Threat();
            threat5.title = "Threat 5";            
            threat5.score = 0.7

            const threat6 = new Threat();
            threat6.title = "Threat 6";            
            threat6.score = 0.85

            const threat7 = new Threat();
            threat7.title = "Threat 7";            
            threat7.score = 0.95

            const threat8 = new Threat();
            threat8.title = "Threat 8";            
            threat8.score = 1

            project.threats = [threat1, threat2, threat3, threat4,threat5, threat6, threat7, threat8];

            //act
            const returnedThreats = cumulativeSuccessService.setThreatsCumulativeSuccess(project.threats)

            //assert
            expect(returnedThreats).toBeTruthy();
            expect(returnedThreats.length).toBe(4);
            expect(returnedThreats[0].title).toBe(threat1.title);
            expect(returnedThreats[1].title).toBe(threat2.title);
            expect(returnedThreats[2].title).toBe(threat3.title);
            expect(returnedThreats[3].title).toBe(threat4.title);
            expect(returnedThreats[4].title).toBe(threat5.title);
            expect(returnedThreats[5].title).toBe(threat6.title);
            expect(returnedThreats[6].title).toBe(threat7.title);
            expect(returnedThreats[7].title).toBe(threat8.title);

            expect(returnedThreats[0].cumulativeSuccessPercent).toBe(25);
            expect(returnedThreats[1].cumulativeSuccessPercent).toBe(8.75);
            expect(returnedThreats[2].cumulativeSuccessPercent).toBe(4.38);
            expect(returnedThreats[3].cumulativeSuccessPercent).toBe(1.75);
            expect(returnedThreats[4].cumulativeSuccessPercent).toBe(0.53);
            expect(returnedThreats[5].cumulativeSuccessPercent).toBe(0.08);
            expect(returnedThreats[6].cumulativeSuccessPercent).toBe(0);
            expect(returnedThreats[7].cumulativeSuccessPercent).toBe(0);
        });
    });

    describe('setProjectSuccessPrediction()', () => {

    });
}); 