const mPro = new Promise((res, rej) => {
  setTimeout(() => {
    res("Its A Res");
  }, 3000);
});

async function getData() {
  console.log("Before");
  try {
    let data = await fetch(
      "https://api.github.com/users/elzerowebschool/repos"
    );
    console.log(await data.json());
  } catch (res) {
    console.log(`R: ${res}`);
  } finally {
    console.log("After");
  }
}

getData();
