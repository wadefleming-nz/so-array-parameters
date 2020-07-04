function all(filter?: opts) {
  console.log(filter);
}

type opts = ('id' | 'name' | 'namePlural' | 'group')[];

all(["id"]);
all(["id", "group"]);
