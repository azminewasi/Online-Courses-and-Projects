import pandas as pd

df = pd.read_csv("adult.data.csv")



average_age_men = df.groupby('sex')['age'].mean().loc['Male']

percentage_bachelors = df.groupby('education')['education'].size().loc['Male']



print(percentage_bachelors)

