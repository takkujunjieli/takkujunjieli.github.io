---
layout: post
title: "Predicting Time Series Data with Prophet"
excerpt: "Facebook Prophet is a powerful tool of high level of automation for univariate forecasting."
date: 2024-07-23
category: Engineer
tags: [blog]
description: "Y."
comments: true
# external_url: "https://facebook.github.io/prophet/docs/quick_start.html"
---


## Getting Started: Predicting Time Series Data with Prophet

**Introduction**

Facebook Prophet is a powerful tool for forecasting time series data. It’s designed to handle missing data, outliers, and seasonal effects with ease. Here, we'll provide a hands-on example of using Prophet and discuss some important caveats. Check more on [docs](https://facebook.github.io/prophet/docs/quick_start.html).

### Prophet vs. ARIMA

#### 1. Modeling Components
**Facebook Prophet:**
- **Trend:** Can handle non-linear trends and allows for multiple trend changes.
- **Seasonality:** Automatically includes daily, weekly, and yearly seasonality. Custom seasonality can also be added.
- **Holiday Effects:** Easily incorporates the effects of holidays and special events.
- **Outliers and Missing Data:** Robust to missing data and outliers by design.

**ARIMA:**
- **Trend:** Handles linear trends through differencing (Integrated part).
- **Seasonality:** Can include seasonality through seasonal differencing or the SARIMA extension (Seasonal ARIMA).
- **Holiday Effects:** Does not natively include holiday effects; these need to be manually modeled and included.
- **Outliers and Missing Data:** Sensitive to outliers and missing data; these issues need to be addressed through preprocessing.

#### 2. Flexibility and Customization
**Facebook Prophet:**
- High level of automation with limited need for manual tuning.
- Can add custom seasonalities and handle missing data more gracefully.
- Limited to univariate forecasting.

**ARIMA:**
- Highly flexible but requires more manual intervention.
- Can be extended to multivariate forecasting (VARIMA, SARIMA, etc.).
- Requires manual handling of missing data and outliers.

#### 3. Performance and Suitability
**Facebook Prophet:**
- Best suited for business data with strong seasonal patterns and the need for handling holidays and special events.
- May not perform as well as ARIMA in purely statistical forecasting tasks with fewer seasonal effects.

**ARIMA:**
- Strong performance in purely statistical time series forecasting.
- Better suited for academic and research applications where model interpretability and statistical rigor are important.


### Prophet vs. ARIMA in Python


```python
# Import necessary libraries
import pandas as pd
import numpy as np
from prophet import Prophet
import matplotlib.pyplot as plt
from statsmodels.tsa.arima.model import ARIMA
from sklearn.metrics import mean_absolute_error

# Generate synthetic data
np.random.seed(42)
date_range = pd.date_range(start='2020-01-01', end='2023-01-01', freq='D')
data = pd.DataFrame(date_range, columns=['ds'])
data['y'] = 20 + np.sin(2 * np.pi * data.index / 365.25) * 10 + np.random.normal(0, 2, len(data)) + \
            np.where(data['ds'].dt.weekday < 5, 5, -5)  # Adding weekend effect

# Add holiday effects
holidays = pd.DataFrame({
    'holiday': 'event',
    'ds': pd.to_datetime(['2020-12-25', '2021-12-25', '2022-12-25']),
    'lower_window': 0,
    'upper_window': 1,
})
data.loc[data['ds'].isin(holidays['ds']), 'y'] += 15

# Split data into training and test sets
train_data = data[data['ds'] < '2022-01-01']
test_data = data[data['ds'] >= '2022-01-01']

# Fit Prophet model
prophet_model = Prophet(holidays=holidays, yearly_seasonality=True, weekly_seasonality=True, daily_seasonality=False)
prophet_model.fit(train_data)

# Make predictions with Prophet
future = prophet_model.make_future_dataframe(periods=len(test_data))
prophet_forecast = prophet_model.predict(future)

# Evaluate Prophet model
prophet_pred = prophet_forecast.set_index('ds').loc[test_data['ds']]['yhat']
prophet_mae = mean_absolute_error(test_data['y'], prophet_pred)


# Fit ARIMA model (requires manual tuning)
arima_order = (5, 1, 2)  # This requires domain knowledge and can be time-consuming
arima_model = ARIMA(train_data['y'], order=arima_order)
arima_fit = arima_model.fit()

# Make predictions with ARIMA
arima_forecast = arima_fit.forecast(steps=len(test_data))
arima_mae = mean_absolute_error(test_data['y'], arima_forecast)


# Print Mean Absolute Errors
print(f'Facebook Prophet MAE: {prophet_mae}')
print(f'ARIMA MAE: {arima_mae}')
```





