import { countClientsMatching } from "../search";
import * as Module from "../clients";

describe("countClientsMathing should count number of clients thats mathing when given name", () => {

    test('should return 0 when 0 out of 2 clients match', () => {

        jest.spyOn(Module, 'requestClients').mockReturnValue([
            {
                id: 1,
                name: "Nelio Alves"
            },
            {
                id: 2,
                name: "Mackristofer Mendes"
            }
        ])

        const result = countClientsMatching("Kennedy");
        expect(result).toEqual(0);
    });
    
    test('should return 2 when 2 out of 4 clients match', () => {

        jest.spyOn(Module, 'requestClients').mockReturnValue([
            {
                id: 1,
                name: "Nelio Alves"
            },
            {
                id: 2,
                name: "Mackristofer Mendes"
            },
            {
                id: 3,
                name: "Filipe Mendes"
            },
            {
                id: 4,
                name: "Kennedy Costa"
            }
        ])

        const result = countClientsMatching("Mendes");
        expect(result).toEqual(2);
    })
})