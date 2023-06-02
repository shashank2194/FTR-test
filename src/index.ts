import readline from 'readline';

class FrequencyTracker {
  private frequencies: Map<number, number>;
  private fibonacciSet: Set<number>;
  private timer: NodeJS.Timeout | null;
  private seconds: number;

  constructor() {
    this.frequencies = new Map();
    this.fibonacciSet = new Set();
    this.timer = null;
    this.seconds = 0;
  }

  private printFrequencies(): void {
    const sortedFrequencies = Array.from(this.frequencies.entries()).sort(
      (a, b) => b[1] - a[1]
    );

    for (const [number, frequency] of sortedFrequencies) {
      console.log(`${number}:${frequency}`);
    }
  }

  private checkFibonacci(number: number): void {
    if (this.fibonacciSet.has(number)) {
      console.log('FIB');
    }
  }

  public start(): void {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Please input the number of time in seconds between emitting numbers and their frequency\n', (input: string) => {
      this.seconds = parseInt(input, 10);

      rl.on('line', (input: string) => {
        if (input === 'quit') {
          this.printFrequencies();
          console.log('Thanks for playing, press any key to exit.');
          rl.close();
        } else if (input === 'halt') {
          if (this.timer) {
            clearTimeout(this.timer);
            console.log('timer halted');
          }
        } else if (input === 'resume') {
          if (!this.timer) {
            this.timer = setInterval(() => {
              this.printFrequencies();
            }, this.seconds * 1000);
            console.log('timer resumed');
          }
        } else {
          const number = parseInt(input, 10);

          this.checkFibonacci(number);

          const frequency = this.frequencies.get(number) || 0;
          this.frequencies.set(number, frequency + 1);
        }
      });
    });
  }
}

const frequencyTracker = new FrequencyTracker();
frequencyTracker.start();
