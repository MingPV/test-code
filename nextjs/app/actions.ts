// action.ts

'use server'
export async function sayHelloFromServer() {
  console.log("Hello from server");
}


export async function sayHelloFromServerAfter2Sec(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Hello from server after 2 sec");
        resolve("data after 2 sec"); // Resolve the promise with the desired data
      }, 2000);
    });
  }
