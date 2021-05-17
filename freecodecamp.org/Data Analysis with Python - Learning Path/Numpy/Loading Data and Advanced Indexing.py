import numpy as np


filedata = np.genfromtxt('data.txt', delimiter=',')
output = filedata[filedata < 50]

print(output)