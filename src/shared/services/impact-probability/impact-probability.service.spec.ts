import { ThreatScoreService } from "./impact-probability.service";
import { Probability } from "../../enums/probability.enum";
import { Impact } from "../../enums/impact.enum";

describe('ImpactProbabilityService', () => {
    const impactProbabilityService = ThreatScoreService;

    describe('getImpactProbability()', () => {
        describe('when probability is Impossible', () => {
            const probability: Probability = Probability.Impossible;

            it('should return a score of 1 when impact is Catastrophic', () => {
                expect(ThreatScoreService.getScore(probability, Impact.Catastrophic)).toBe(1);
            });
            it('should return a score of 1 when impact is VeryHigh', () => {
                expect(ThreatScoreService.getScore(probability, Impact.VeryHigh)).toBe(1);
            });
            it('should return a score of 1 when impact is High', () => {
                expect(ThreatScoreService.getScore(probability, Impact.High)).toBe(1);
            });
            it('should return a score of 1 when impact is Medium', () => {
                expect(ThreatScoreService.getScore(probability, Impact.Medium)).toBe(1);
            });
            it('should return a score of 1 when impact is Low', () => {
                expect(ThreatScoreService.getScore(probability, Impact.Low)).toBe(1);
            });
            it('should return a score of 1 when impact is VeryLow', () => {
                expect(ThreatScoreService.getScore(probability, Impact.VeryLow)).toBe(1);
            });
            it('should return a score of 1 when impact is NoImpact', () => {
                expect(ThreatScoreService.getScore(probability, Impact.NoImpact)).toBe(1);
            });
        });

        describe('when probability is AlmostImpossible', () => {
            const probability: Probability = Probability.AlmostImpossible;

            it('should return a score of 0.8 when impact is Catastrophic', () => {
                expect(ThreatScoreService.getScore(probability, Impact.Catastrophic)).toBe(0.8);
            });
            it('should return a score of 0.9 when impact is VeryHigh', () => {
                expect(ThreatScoreService.getScore(probability, Impact.VeryHigh)).toBe(0.9);
            });
            it('should return a score of 0.92 when impact is High', () => {
                expect(ThreatScoreService.getScore(probability, Impact.High)).toBe(0.92);
            });
            it('should return a score of 0.93 when impact is Medium', () => {
                expect(ThreatScoreService.getScore(probability, Impact.Medium)).toBe(0.93);
            });
            it('should return a score of 0.95 when impact is Low', () => {
                expect(ThreatScoreService.getScore(probability, Impact.Low)).toBe(0.95);
            });
            it('should return a score of 0.98 when impact is VeryLow', () => {
                expect(ThreatScoreService.getScore(probability, Impact.VeryLow)).toBe(0.98);
            });
            it('should return a score of 1 when impact is NoImpact', () => {
                expect(ThreatScoreService.getScore(probability, Impact.NoImpact)).toBe(1);
            });
        });

        describe('when probability is Unlikely', () => {
            const probability: Probability = Probability.Unlikely;

            it('should return a score of 0.4 when impact is Catastrophic', () => {
                expect(ThreatScoreService.getScore(probability, Impact.Catastrophic)).toBe(0.4);
            });
            it('should return a score of 0.6 when impact is VeryHigh', () => {
                expect(ThreatScoreService.getScore(probability, Impact.VeryHigh)).toBe(0.6);
            });
            it('should return a score of 0.7 when impact is High', () => {
                expect(ThreatScoreService.getScore(probability, Impact.High)).toBe(0.7);
            });
            it('should return a score of 0.85 when impact is Medium', () => {
                expect(ThreatScoreService.getScore(probability, Impact.Medium)).toBe(0.85);
            });
            it('should return a score of 0.9 when impact is Low', () => {
                expect(ThreatScoreService.getScore(probability, Impact.Low)).toBe(0.9);
            });
            it('should return a score of 0.95 when impact is VeryLow', () => {
                expect(ThreatScoreService.getScore(probability, Impact.VeryLow)).toBe(0.95);
            });
            it('should return a score of 1 when impact is NoImpact', () => {
                expect(ThreatScoreService.getScore(probability, Impact.NoImpact)).toBe(1);
            });
        });

        describe('when probability is Likely', () => {
            const probability: Probability = Probability.Likely;

            it('should return a score of 0.2 when impact is Catastrophic', () => {
                expect(ThreatScoreService.getScore(probability, Impact.Catastrophic)).toBe(0.2);
            });
            it('should return a score of 0.4 when impact is VeryHigh', () => {
                expect(ThreatScoreService.getScore(probability, Impact.VeryHigh)).toBe(0.4);
            });
            it('should return a score of 0.5 when impact is High', () => {
                expect(ThreatScoreService.getScore(probability, Impact.High)).toBe(0.5);
            });
            it('should return a score of 0.6 when impact is Medium', () => {
                expect(ThreatScoreService.getScore(probability, Impact.Medium)).toBe(0.6);
            });
            it('should return a score of 0.75 when impact is Low', () => {
                expect(ThreatScoreService.getScore(probability, Impact.Low)).toBe(0.75);
            });
            it('should return a score of 0.92 when impact is VeryLow', () => {
                expect(ThreatScoreService.getScore(probability, Impact.VeryLow)).toBe(0.92);
            });
            it('should return a score of 1 when impact is NoImpact', () => {
                expect(ThreatScoreService.getScore(probability, Impact.NoImpact)).toBe(1);
            });
        });

        describe('when probability is AlmostCertain', () => {
            const probability: Probability = Probability.AlmostCertain;

            it('should return a score of 0.1 when impact is Catastrophic', () => {
                expect(ThreatScoreService.getScore(probability, Impact.Catastrophic)).toBe(0.1);
            });
            it('should return a score of 0.25 when impact is VeryHigh', () => {
                expect(ThreatScoreService.getScore(probability, Impact.VeryHigh)).toBe(0.25);
            });
            it('should return a score of 0.35 when impact is High', () => {
                expect(ThreatScoreService.getScore(probability, Impact.High)).toBe(0.35);
            });
            it('should return a score of 0.5 when impact is Medium', () => {
                expect(ThreatScoreService.getScore(probability, Impact.Medium)).toBe(0.5);
            });
            it('should return a score of 0.7 when impact is Low', () => {
                expect(ThreatScoreService.getScore(probability, Impact.Low)).toBe(0.7);
            });
            it('should return a score of 0.9 when impact is VeryLow', () => {
                expect(ThreatScoreService.getScore(probability, Impact.VeryLow)).toBe(0.9);
            });
            it('should return a score of 1 when impact is NoImpact', () => {
                expect(ThreatScoreService.getScore(probability, Impact.NoImpact)).toBe(1);
            });
        });

         describe('when probability is Certain', () => {
            const probability: Probability = Probability.Certain;

            it('should return a score of 0 when impact is Catastrophic', () => {
                expect(ThreatScoreService.getScore(probability, Impact.Catastrophic)).toBe(0);
            });
            it('should return a score of 0.1 when impact is VeryHigh', () => {
                expect(ThreatScoreService.getScore(probability, Impact.VeryHigh)).toBe(0.1);
            });
            it('should return a score of 0.2 when impact is High', () => {
                expect(ThreatScoreService.getScore(probability, Impact.High)).toBe(0.2);
            });
            it('should return a score of 0.4 when impact is Medium', () => {
                expect(ThreatScoreService.getScore(probability, Impact.Medium)).toBe(0.4);
            });
            it('should return a score of 0.75 when impact is Low', () => {
                expect(ThreatScoreService.getScore(probability, Impact.Low)).toBe(0.75);
            });
            it('should return a score of 0.85 when impact is VeryLow', () => {
                expect(ThreatScoreService.getScore(probability, Impact.VeryLow)).toBe(0.85);
            });
            it('should return a score of 1 when impact is NoImpact', () => {
                expect(ThreatScoreService.getScore(probability, Impact.NoImpact)).toBe(1);
            });
        });
    });
});