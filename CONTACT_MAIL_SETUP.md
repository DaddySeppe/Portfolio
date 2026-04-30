# Contactformulier mail instellen

Het contactformulier stuurt altijd naar:

```text
seppe.vanroy@telenet.be
```

De backend staat in `api/contact.php`.

## Beste optie: SMTP instellen

Zet deze environment variables op je hosting:

```text
SMTP_HOST=smtp.jouwprovider.be
SMTP_PORT=587
SMTP_SECURE=tls
SMTP_USER=jouw_smtp_gebruikersnaam
SMTP_PASS=jouw_smtp_wachtwoord
CONTACT_FROM=portfolio@jouwdomein.be
```

Voor poort `465` gebruik je:

```text
SMTP_SECURE=ssl
```

## Fallback

Als SMTP niet ingesteld is, probeert `api/contact.php` automatisch `PHP mail()`.
Dat werkt alleen als je hosting mail delivery ondersteunt.

Op een lokale server of gewone static hosting werkt echte mail meestal niet.
