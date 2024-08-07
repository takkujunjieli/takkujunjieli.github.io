---
layout: post
title: "Introduction of N-BEATS"
excerpt: "N-BEATS (Neural Basis Expansion Analysis Time Series) is a deep learning model designed specifically for time series forecasting."
date: 2024-08-07
category: Practices
tags: [blog]
description: "Y."
comments: true
---


## Getting Started: Neural Basis Expansion Analysis Time Series

**Introduction**

N-BEATS (Neural Basis Expansion Analysis Time Series) is a deep learning model designed specifically for time series forecasting. Developed by a team at Element AI, it addresses the challenges of complex temporal patterns and has shown state-of-the-art performance in various forecasting tasks. N-BEATS is particularly known for its flexibility, scalability, and interpretability, making it an attractive choice for data scientists and engineers.

### 1. Key Features of N-BEATS

- **Trend:** 
- **Architecture**: N-BEATS employs a stack of fully connected layers (FC layers) organized into blocks. Each block has two parts: a trend model and a seasonality model. These blocks can be stacked in different configurations, allowing the model to capture various temporal patterns effectively.   

- **Interpretable**: The model's architecture provides a clear understanding of how trends and seasonal components contribute to the final forecast, making it more interpretable than many other deep learning models.   

- **No Need for Feature Engineering**: Unlike traditional models, N-BEATS doesn't require manual feature engineering or preprocessing, as it learns directly from raw time series data.

### 2. Pros and Cons   

#### **Pros:**   

- **State-of-the-Art Performance**: N-BEATS has achieved competitive results on various benchmarks, often outperforming traditional models like ARIMA and more complex models like LSTMs.   

- **Scalability**: The model can be easily scaled to handle large datasets and complex time series.
Interpretability: N-BEATS offers insights into the components of the time series (e.g., trend and seasonality) that contribute to the predictions.   

- **Flexibility**: The architecture allows for customization, making it adaptable to various forecasting tasks.


#### **Cons:**   

- **Resource Intensive**: N-BEATS requires significant computational resources, especially for large datasets, which can be a limitation for some users. 




### 3. Sample Python Code for N-BEATS



```python
import torch
from pytorch_forecasting import TimeSeriesDataSet, NBeats, TemporalFusionTransformer, Baseline
from pytorch_forecasting.data.encoders import NaNLabelEncoder
from pytorch_forecasting.metrics import SMAPE
from pytorch_forecasting.models import TemporalFusionTransformer

# Load your time series data
# Assume data is a pandas DataFrame with 'date', 'value' columns

data['date'] = pd.to_datetime(data['date'])
data.set_index('date', inplace=True)

# Prepare dataset
max_encoder_length = 30  # length of history
max_prediction_length = 10  # length of predictions

# Define the time series dataset
training_cutoff = data.index[-max_prediction_length] - pd.Timedelta(days=7)
train_dataset = TimeSeriesDataSet(
    data[lambda x: x.index <= training_cutoff],
    time_idx="date",
    target="value",
    group_ids=["series_id"],
    max_encoder_length=max_encoder_length,
    max_prediction_length=max_prediction_length,
    static_categoricals=["series_id"],
    time_varying_unknown_reals=["value"],
    target_normalizer=NaNLabelEncoder(),
)

# Create dataloaders
train_dataloader = train_dataset.to_dataloader(train=True, batch_size=32, num_workers=0)

# Initialize N-BEATS model
model = NBeats.from_dataset(
    train_dataset,
    learning_rate=1e-2,
    log_interval=10,
    log_val_interval=1,
    hidden_size=64,
    attention_head_size=16,
    dropout=0.1,
    loss=SMAPE(),
)

# Train the model
trainer = pl.Trainer(max_epochs=10, gpus=1)
trainer.fit(model, train_dataloader)

# Forecast using the model
predictions = model.predict(train_dataloader, mode="prediction")

# Visualize results
model.plot_prediction(data, predictions)

```





