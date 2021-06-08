import urllib.request, urllib.parse,urllib.error
fg=open("x.txt","a")
fhand = urllib.request. urlopen("https://mbasic.facebook.com/yeah.I.am.AzmineWasi/about")
ls=list()
for line in fhand:
  n =(line.decode().strip())

  print (n)


    


  

  fg.write(n)
fg.close()