
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
serviceName: faker.lorem.sentence(""),
errorMessage: faker.lorem.sentence(""),
message: faker.lorem.sentence(""),
stack: faker.lorem.sentence(""),
details: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};