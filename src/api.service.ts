export abstract class AbstractApiService {
  abstract getDataByCompetency(competency: string): Promise<any>;
}
