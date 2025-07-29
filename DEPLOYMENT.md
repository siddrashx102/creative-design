# Render Deployment Guide

This guide will help you deploy your CreativeStudio Digital Agency website to Render.

## Prerequisites

1. A GitHub account (to connect your repository)
2. A Render account (free tier available)
3. Your source code pushed to a GitHub repository

## Step 1: Prepare Your Repository

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Prepare for Render deployment"
   git push origin main
   ```

## Step 2: Set Up Database (Optional)

If your app uses a database, you'll need to set up a PostgreSQL database on Render:

1. Go to your Render dashboard
2. Click "New +" → "PostgreSQL"
3. Choose a name (e.g., "creativestudio-db")
4. Select the free tier
5. Click "Create Database"
6. Save the connection details for later

## Step 3: Deploy to Render

### Option A: Using Render Dashboard (Recommended)

1. **Go to Render Dashboard:**
   - Visit [render.com](https://render.com)
   - Sign in or create an account

2. **Create a New Web Service:**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select your repository from the list

3. **Configure the Service:**
   - **Name:** creativestudio-agency (or your preferred name)
   - **Environment:** Node
   - **Build Command:** `npm ci --include=dev && npm run build`
   - **Start Command:** `npm start`
   - **Plan:** Free (or choose paid for better performance)

4. **Set Environment Variables:**
   Click "Environment" and add these variables:
   - `NODE_ENV` = `production`
   - `PORT` = `10000` (Render will override this automatically)
   - `DATABASE_URL` = (your database URL if using database)
   - Add any other environment variables your app needs

5. **Deploy:**
   - Click "Create Web Service"
   - Render will automatically build and deploy your app

### Option B: Using render.yaml (Infrastructure as Code)

1. **The render.yaml file is already created in your project**
2. **Connect via GitHub:**
   - Go to Render dashboard
   - Click "New +" → "Blueprint"
   - Connect your repository
   - Render will automatically detect the render.yaml file

## Step 4: Configure Environment Variables

Add these environment variables in your Render service settings:

### Required Variables:
- `NODE_ENV` = `production`
- `SESSION_SECRET` = `your-secret-key-here` (generate a random string)

### Database Variables (if using database):
- `DATABASE_URL` = (provided by your Render PostgreSQL service)

### Email Variables (Optional - for contact forms):
- `GMAIL_USER` = `your-gmail@gmail.com`
- `GMAIL_APP_PASSWORD` = `your-gmail-app-password`

**Note:** The app will work perfectly without email configuration. Contact forms will still function, but emails won't be sent. To enable email functionality, you'll need to:
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password (not your regular password)
3. Add both GMAIL_USER and GMAIL_APP_PASSWORD environment variables

## Step 5: Update Your Application (if needed)

Your application is already configured correctly for Render deployment, but here are the key configurations:

1. **Port Configuration:** ✅ Already configured to use `process.env.PORT || 5000`
2. **Static File Serving:** ✅ Already configured in `server/vite.ts`
3. **Build Process:** ✅ Already configured in package.json

## Step 6: Test Your Deployment

1. **Check Build Logs:**
   - Go to your service in Render dashboard
   - Click on "Logs" to see build and runtime logs
   - Look for any errors during the build process

2. **Test Your Application:**
   - Once deployed, Render will provide a URL (e.g., `https://your-app-name.onrender.com`)
   - Visit the URL to test your application
   - Test all features including contact forms, navigation, etc.

## Troubleshooting

### Common Issues:

1. **Build Fails:**
   - **"vite: not found" error:** Use build command `npm ci --include=dev && npm run build`
   - Check that all dependencies are in package.json
   - Verify dev dependencies are installed during build process

2. **App Doesn't Start:**
   - Check start command: `npm start`
   - Verify PORT environment variable is set
   - Check application logs in Render dashboard

3. **Database Connection Issues:**
   - Verify DATABASE_URL is correctly set
   - Ensure database is running and accessible

4. **Email Configuration Errors:**
   - **Error: "Missing credentials for PLAIN"** - This is normal if email credentials aren't set up yet
   - The app works perfectly without email - this error can be ignored if you don't need email functionality
   - To enable email: Set GMAIL_USER and GMAIL_APP_PASSWORD environment variables
   - Use Gmail App Password (not your regular password) - requires 2FA enabled

### Performance Tips:

1. **Upgrade to Paid Plan:** Free tier sleeps after 15 minutes of inactivity
2. **Use CDN:** Consider using a CDN for static assets
3. **Optimize Images:** Compress images before deploying
4. **Enable Caching:** Configure browser caching for static assets

## Environment Variables Reference

```env
# Required
NODE_ENV=production
SESSION_SECRET=your-long-random-secret-key

# Database (if using)
DATABASE_URL=postgresql://username:password@hostname:port/database

# Email (if using contact forms)
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-app-password

# Optional
PORT=10000
```

## Continuous Deployment

Render automatically redeploys your app when you push changes to your connected GitHub branch:

1. Make changes to your code
2. Commit and push to GitHub
3. Render automatically rebuilds and deploys

## Custom Domain (Optional)

To use your own domain:

1. Go to your service settings in Render
2. Click "Settings" → "Custom Domains"
3. Add your domain name
4. Configure DNS records as shown in Render dashboard

## Support

- [Render Documentation](https://render.com/docs)
- [Render Community](https://community.render.com)
- Check logs in Render dashboard for specific error messages