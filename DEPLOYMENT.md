# Deployment Guide

## Target: Raspberry Pi 4

Frontend static build served via Nginx at `https://www.minglongpan.club/`.

### Build

```bash
npm run build
```

Output goes to `dist/`.

### Nginx Setup

```nginx
server {
    listen 80;
    server_name minglongpan.club www.minglongpan.club;
    root /var/www/minglongpan.club;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### HTTPS

Use Let's Encrypt with Certbot:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d minglongpan.club -d www.minglongpan.club
```

### Deploy Steps

1. Build locally: `npm run build`
2. Copy `dist/` to Pi: `scp -r dist/* pi@<PI_IP>:/var/www/minglongpan.club/`
3. Reload Nginx: `sudo systemctl reload nginx`

### Domain

Point `minglongpan.club` to your home IP. Use dynamic DNS if your ISP assigns dynamic IPs.

### Backend (Phase 2+)

Run as a systemd service or Docker container on the same Pi. Nginx reverse-proxies `/api/*` to the backend port.
