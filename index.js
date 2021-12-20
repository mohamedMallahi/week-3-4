const RemixFramework = {
  name: 'Remix',
  built: {
    name: 'Next',
    built: {
      name: 'React',
      built: {
        name: 'Javascript',
      },
    },
  },
};

const DjangoFramework = {
  name: 'Django',
  built: {
    name: 'Python',
    built: {
      name: 'C++',
      built: {
        name: 'C',
        built: {name: 'Jack'}
      }
    }
  }
}

function countDown(num) {
  if (num <= 0) {
    console.log('Hooray');
    return 'end';
  }
  console.log(num);
  countDown(num - 1);
}

// countDown(10);

function sumRange(num, total = 0) {
  if (num <= 0) {
    return total;
  }

  return sumRange(num - 1, total + num);
}

function printFramework(framework) {
  if (framework.built === null || framework.built === undefined) {
    console.log(framework.name)
    return 'Nothing';
  }

  console.log(framework.name);
  return printFramework(framework.built);
}

// printFramework(RemixFramework);
printFramework(DjangoFramework);
