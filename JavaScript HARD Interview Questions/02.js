// // Implement a scheduler with concurrency control

class TaskScheduler {
    constructor(concurrency){
        this.concurrency = Number(concurrency)
        this.runningTask = 0;
        this.__waitingQueue = []
    }

    getNextTask(){
        if(this.runningTask < this.concurrency && this.__waitingQueue.length > 0){
            const newTask = this.__waitingQueue.shift()
            newTask()
        }
    }

    addTask(task){
        return new Promise((resolve , reject) => {
            async function __taskRunner() {
                this.runningTask +=1;
                try {
                    const result = await task()
                    console.log(`Result`, result)
                    resolve(result)
                } catch (err) {
                    console.log(`Task Failed`, err)
                    reject(err)
                }
                finally{
                    this.runningTask -=1;
                    this.getNextTask()
                }
            }
            if(this.runningTask < this.concurrency){
                __taskRunner.call(this)
            }
            else{
                this.__waitingQueue.push(__taskRunner.bind(this))
            }
        })
    }
}

// Example usage:
const scheduler = new TaskScheduler(2)

scheduler.addTask(
    () => new Promise((res) => setTimeout(() => res('Task1'), 1000))
)
scheduler.addTask(
    () => new Promise((res) => setTimeout(() => res('Task2'), 500))
)
scheduler.addTask(
    () => new Promise((res) => setTimeout(() => res('Task3'), 300))
)
scheduler.addTask(
    () => new Promise((res) => setTimeout(() => res('Task4'), 400))
)