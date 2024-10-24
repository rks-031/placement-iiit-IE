export const questions = [
    {
      id: "question1",
      text: `Q1) A company's primary application, hosted in North America, uses a stateful monolithic architecture. Due to global expansion, there is a significant increase in traffic from Europe, European users report latency issues. After analysis, the majority of latency arises during the user authentication phase. A microservice in Europe just for authentication will be implemented.
It must ensure that:
-User data remains consistent between North America and Europe.
-Sensitive user information, such as passwords, remains encrypted and is not directly transferred across regions.
-The latency during the authentication phase for European users is minimized.

Given these constraints, which approach best addresses the issues?

Pick ONE option`,
      options: {
        a: "Create a full replica of the user database in Europe. Use cryptographic hashing for passwords. During authentication, verify the user in the European microservice. If verification fails, retry in North America.",
        b: "Use a distributed cache in Europe containing only necessary user data, excluding sensitive details. Sync this cache periodically with the main database in North America. Authenticate European users using this cache.",
        c: "Store only user IDs and hashed passwords in a European database. For other user details and functions, refer to the North American server.",
        d: "Implement a peer-to-peer network for user data between North American and European servers. During authentication, the European microservice fetches real-time data from North America.",
      },
    },
    {
      id: "question2",
      text: `Q2) Which file contains the default environment variables when using the bash shell?`,
      options: {
        a: "~/.profile",
        b: "~/.bash",
        c: "/etc/profile.d",
        d: "~/bash",
      },
    },
    {
      id: "question3",
      text: `Q3) Consider a complex multi-threaded Linux application that utilizes POSIX threads for parallel processing. The application has multiple threads executing concurrently, each accessing shared resources. One of the threads needs to perform a critical section of code protected by a mutex to ensure proper synchronization and prevent data corruption. However, the following challenges are there:
1. The thread that holds the mutex enters a non-preemptive state and cannot be forcibly preempted by the scheduler.
2. There is a real-time thread with higher priority that requires access to the same critical section protected by the mutex.
3. The real-time thread needs to be granted access to the critical section within a fixed time frame, or it might cause a system failure.

Which of the following statements is true?

Pick ONE option`,
      options: {
        a: "Since the thread holding the mutex cannot be preempted, the real-time thread will never be able to access the critical section",
        b: "The real-time thread will be granted access to the critical section, and the mutex will be released from the non-preemptive thread, causing potential data corruption",
        c: "To avoid deadlock, the real-time thread will forcefully acquire the mutex, overriding the non-preemptive thread's access and prioritizing real-time execution",
        d: "Implementing priority inheritance protocol with the mutex will ensure the real-time thread's access to the critical section without compromising data integrity",
      },
    },
    {
      id: "question4",
      text: `Q4) Which of the following are the responsibilities of an OS?
Pick ONE OR MORE options`,
      options: {
        a: "Process Management",
        b: "Memory",
        c: "Security",
        d: "Performance",
        e: "a, b & c"
      },
    },
    {
      id: "question5",
      text: `Q5) A Linux system administrator needs to securely transfer a file named myapp.log from a local server to a remote server using SSH. The system administrator has regular user privileges and the myapp.log file can only be accessed by the root user.
Which command should the administrator use?
Pick ONE option`,
      options: {
        a: "sudo scp -i /root/.ssh/id_rsa/path/to/myapp.log ubuntu@10.0.1.34:/remote-dir/my-location/",
        b: "sudo -u root scp /path/to/myapp.log ubuntu@10.0.1.34:/remote-dir/my-location/",
        c: "sudo -u root chown root /path/to/myapp.log && sudo -u root scp /path/to/myapp.log ubuntu@10.0.1.34:/remove-dir/my-location/",
        d: "sudo -u root scp -i/root/.ssh/id_rsa/path/to/myapp.log ubuntu@10.0.1.34:/remove-dir/my-location/",
      },
    },
    {
      id: "question6",
      text: `Q6) Which scenario is most likely to trigger a kernel panic error in the Linux operating system?`,
      options: {
        a: "initiating a system call that attempts to access a non-existent hardware device",
        b: "II only",
        c: "inserting a corrupt kernel module that conflicts with the existing kernel version",
        d: "running a multi-threaded application that exceeds the system's maximum thread limit",
        e: "executing a memory-intensive scientific simulation with parallel processes",
      },
    },
    {
      id: "question7",
      text: `Q7) This diagram represents a Linux process and its stack memory layout. The process has two threads, Thread1 and Thread2, each with its own stack, sharing the same address space. Thread 1 is executing and performing a function call, pushing data onto its stack. Simultaneously, Thread 2 is also executing and making its own function call, pushing data onto its stack. Both threads are using the same function with different arguments.
What will happen if both threads modify a global variable within the function?
Pick ONE option `,
      img: "/img/OS1.png",
      options: {
        a: "The global variable will be overwritten with the value from the thread that called the function last.",
        b: "The global variable will be unaffected, as each thread has its own stack, isolating their modifications.",
        c: "The final value will be unpredictable since the order of their executions cannot be determined.",
        d: "The global variable will automatically be protected, and only one thread can modify it at a time.",
      },
    },
    {
      id: "question8",
      text: `Q8) A Linux system administrator responsible for process monitoring and management must identify and terminate a process that is consuming excessive CPU resources. The process is identified by its command-line arguments, which include the string app_process and the value myapp as an argument.
Which command-line snippet accomplishes this?
Pick ONE OR MORE options`,
    options : {
        a: "ps aux | grep -E \"app_process.*myapp\" | awk '{print $2}' | xargs kill",
        b: "pgrep -a \"app_process myapp\" | awk '{print $1}' | xargs kill",
        c: "pgrep -f \"app_process.*myapp\" | xargs kill",
        d: "killall -r \"app_process.*myapp\"",
  },
    },
    {
      id: "question9",
      text: `Q9) Which section of RAM is shared between a process and a thread?`,
      options: {
        a: "Heap",
        b: "Stack",
        c: "Data",
        d: "Code",
      },
    },
    {
        id: "question10",
        text: `Q10) Which of the following commands will list the last three commands you run excluding itself with the history ID of these commands:`,
        options: {
          a: "history-n 3",
          b: "history-c 3",
          c: "fc-l-3",
          d: "fc-ln-3",
        },
      },
      {
        id: "question11",
        text: `Q11) Which of the following are non-pre-emptive scheduling algorithms?`,
        options: {
          a: "SRTF(Shortest remaining time first)",
          b: "FCFS (First come first serve)",
          c: "LJF (Longest job first)",
          d: "Priority based",
          e: "both a and d",
          f: "both b and c",
        },
      },
      {
        id: "question12",
        text: `Q12) If there are more processes in RAM, then the degree of multiprogramming AND CPU utilization is high" Choose True if the above statement is correct and False otherwise`,
        options: {
          a: "True",
          b: "False",
        },
      },
      {
        id: "question13",
        text: `Q13) A thread is also called:`,
        options: {
          a: "Heavy Weight Process (HWP)",
          b: "Process",
          c: "None of the mentioned",
          d: "Light Weight Process (LWP)",
        },
      },
      {
        id: "question14",
        text: `Q14) Web search engines store information about many web pages by a:`,
        options: {
          a: "Web Organizer",
          b: "Web Indexer",
          c: "Web Router",
          d: "Web Crawler",
        },
      },
      {
        id: "question15",
        text: `Q15) Identify the HTTP status code that does not correctly match its description:`,
        options: {
          a: "301 Gone",
          b: "415 Unsupported Media Type",
          c: "200 OK",
          d: "404 Not Found",
        },
      },
      {
        id: "question16",
        text: `Q16) The time required to examine the packet's header and determine where to direct the packet is part of:`,
        options: {
          a: "Queuing delay",
          b: "Transmission delay",
          c: "Processing delay",
          d: "All of the mentioned",
        },
      }      
  ];
  
  export const correctAnswers = {
    question1: "not answered yet",
    question2: "not answered yet",
    question3: "not answered yet",
    question4: "not answered yet",
    question5: "not answered yet",
    question6: "not answered yet",
    question7: "not answered yet",
    question8: "not answered yet",
    question9: "not answered yet",
    question10: "not answered yet",
    question11: "f",
    question12: "not answered yet",
    question13: "d",
    question14: "not answered yet",
    question15: "not answered yet",
    question16: "not answered yet",
  };
  