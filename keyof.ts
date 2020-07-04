function all1(filter?: opts1) {
  console.log(filter);
}

interface Person {
  id: string;
  name: string;
  namePlural: string;
  group: string;
}

type opts1 = (keyof Person)[];

all1(["id"]);
all1(["id", "group"]);
