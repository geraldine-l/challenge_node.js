import "dotenv/config";
import { say } from "cowsay";

const { MY_NAME, CAMPUS } = process.env;

console.log(say({ text: `Hello I'm ${MY_NAME} from ${CAMPUS}!` }));