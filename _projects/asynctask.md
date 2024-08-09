---
layout: post
image: images/async/ai_async.jpg
title: "AsyncTask Scheduler"
category: Personal
date: 2024
published: true
labels:
  - Framework
  - Asynchronous message
  - Golang  
excerpt: "A Golang framework of scheduling asynchronous tasks for multi-stage deep learning tasks."
---

- Consisting of arbitrary workers to consume tasks and an agent with HTTP interface to create/query/hold tasks,
giving way to horizontal scaling.

- Designed loosely coupled database table normalization& sharding logic, task scheduling rules that support priority
scheduling and flexible retry strategies, and service governance mechanisms.

- Performed stress testing and improved performance from 500 QPS to 2000 QPS by using distributed locks and
caching with Redis and reconfigure the MySQL connection pool.

<!-- Here is some code that illustrates how we read values from the line sensors:

```cpp
byte ADCRead(byte ch)
{
    word value;
    ADC1SC1 = ch;
    while (ADC1SC1_COCO != 1)
    {   // wait until ADC conversion is completed   
    }
    return ADC1RL;  // lower 8-bit value out of 10-bit data from the ADC
}
``` -->

I will offer detailed explanations and architecture images later. You can learn more at the [Github repo](https://github.com/takkujunjieli/AsyncTaskScheduler).
