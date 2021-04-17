TBD

# Scalingo

1. Setup the git remote:
```
git remote add scalingo git@ssh.osc-fr1.scalingo.com:techlog.git
```

2.Deploy your app:
```
git push scalingo master
```

3. Your app is available under https://techlog.osc-fr1.scalingo.io.

## yarn start in local mode

You must fill the port to start the server.

```bash
PORT=3131 yarn start
```

