# Deployment Guide - Railway

## 🚀 Quick Deploy to Railway

1. **Push your code to GitHub**
2. **Connect Railway to your GitHub repo**
3. **Set environment variables**
4. **Deploy!**

## 📧 Email Setup (Required for Contact Form)

### 1. Get Resend API Key
- Go to [resend.com](https://resend.com)
- Sign up and create an account
- Go to API Keys section
- Create a new API key
- Copy the key

### 2. Set Railway Environment Variables
In your Railway project dashboard:
```
RESEND_API_KEY=re_Lt3kcgpr_MZEspb8ae769zzxb2tokeH9B
```

### 3. Update Email Configuration

#### Option A: Gmail Only (Easiest)
Edit `src/app/api/contact/route.ts` and update:
- `to: ['neal.web.dev@gmail.com']` → Your actual Gmail address

#### Option B: Custom Domain (Professional)
1. Verify your domain with Resend
2. Update both fields:
   - `from: 'contact@yourdomain.com'` → Your actual domain
   - `to: ['neal.web.dev@gmail.com']` → Your actual email

## 🔧 Railway Configuration

The `railway.toml` file is already configured for:
- ✅ Automatic builds with Nixpacks
- ✅ Health checks
- ✅ Restart policies
- ✅ Production environment

## 🧪 Testing Locally

1. **Install dependencies**: `npm install`
2. **Create `.env.local`** with your Resend API key
3. **Run locally**: `npm run dev`
4. **Test form**: Fill out and submit the contact form

## 🚨 Important Notes

- **Domain Verification**: You need to verify your domain with Resend
- **API Limits**: Resend has free tier limits (3,000 emails/month)
- **Environment Variables**: Never commit API keys to Git
- **Health Checks**: Railway will monitor your app automatically

## 📱 Form Features

Your contact form now includes:
- ✅ Real-time validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Email sending via Resend
- ✅ Form reset after success
- ✅ Responsive design
- ✅ Accessibility features

## 🔍 Troubleshooting

### Form not sending emails?
- Check Resend API key in Railway environment variables
- Verify domain is verified with Resend
- Check Railway logs for errors

### Build failing?
- Ensure all dependencies are in package.json
- Check for TypeScript errors
- Verify Next.js configuration

### Form validation errors?
- Check browser console for JavaScript errors
- Verify all form fields are properly registered
- Check validation schema in `src/lib/validation.ts`
