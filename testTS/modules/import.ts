import { One } from "./exports"
import * as models from "./exports"


class Test {
  constructor(){
    console.log(new One())
    console.log(models.CHICKEN_CAGE_SIZE)
  }
}

let test = new Test();
