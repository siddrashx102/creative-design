import { useState } from "react";
import { ArrowLeft, Download, FileText, Settings, Folder, Code, ExternalLink, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Documentation() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const installationSteps = [
    {
      id: 1,
      title: "Download from ThemeForest",
      description: "Purchase and download your theme package",
      icon: Download,
      details: [
        "Go to Envato ThemeForest and purchase your chosen theme",
        "Download the theme package (usually a .zip file)",
        "Extract the downloaded file to access theme files",
        "Look for the main theme folder and documentation"
      ]
    },
    {
      id: 2,
      title: "Prepare Your Environment",
      description: "Set up the required development tools",
      icon: Settings,
      details: [
        "Install Node.js (version 18 or higher)",
        "Install a code editor like VS Code",
        "Ensure you have Git installed",
        "Open terminal/command prompt"
      ]
    },
    {
      id: 3,
      title: "Extract Theme Files",
      description: "Organize and understand the theme structure",
      icon: Folder,
      details: [
        "Extract the downloaded .zip file",
        "Navigate to the main theme directory",
        "Locate package.json or similar configuration files",
        "Check for README.md or documentation folder"
      ]
    },
    {
      id: 4,
      title: "Install Dependencies",
      description: "Install required packages and libraries",
      icon: Code,
      details: [
        "Open terminal in the theme directory",
        "Run: npm install or yarn install",
        "Wait for all dependencies to download",
        "Check for any installation errors"
      ]
    },
    {
      id: 5,
      title: "Configure & Customize",
      description: "Set up your theme preferences",
      icon: FileText,
      details: [
        "Review theme configuration files",
        "Update colors, fonts, and branding",
        "Configure API endpoints if needed",
        "Test the theme in development mode"
      ]
    },
    {
      id: 6,
      title: "Build & Deploy",
      description: "Prepare your theme for production",
      icon: CheckCircle,
      details: [
        "Run the build command (npm run build)",
        "Test the production build locally",
        "Deploy to your hosting platform",
        "Configure domain and SSL certificate"
      ]
    }
  ];

  const troubleshooting = [
    {
      problem: "Installation fails with permission errors",
      solution: "Run terminal as administrator or use sudo (on Mac/Linux). Try clearing npm cache with 'npm cache clean --force'"
    },
    {
      problem: "Dependencies not installing correctly",
      solution: "Delete node_modules folder and package-lock.json, then run 'npm install' again"
    },
    {
      problem: "Theme doesn't match preview",
      solution: "Check if demo content is included. Import demo data if available, or follow customization guide"
    },
    {
      problem: "Build errors during deployment",
      solution: "Ensure all environment variables are set. Check Node.js version compatibility"
    },
    {
      problem: "Styling issues or broken layout",
      solution: "Verify all CSS/SCSS files are properly imported. Check for missing font files or CDN links"
    }
  ];

  const platforms = [
    {
      name: "Render",
      description: "Easy deployment with automatic builds",
      steps: ["Connect GitHub repository", "Set build command", "Deploy automatically"],
      recommended: true
    },
    {
      name: "Vercel",
      description: "Optimized for React/Next.js projects",
      steps: ["Import from Git", "Configure settings", "Deploy instantly"],
      recommended: false
    },
    {
      name: "Netlify",
      description: "Great for static sites and JAMstack",
      steps: ["Connect repository", "Set build settings", "Deploy"],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <Separator orientation="vertical" className="h-6" />
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">
              Theme Documentation
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Complete guide to download, install, and customize your ThemeForest themes
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="installation" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="installation">Installation</TabsTrigger>
            <TabsTrigger value="customization">Customization</TabsTrigger>
            <TabsTrigger value="deployment">Deployment</TabsTrigger>
            <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
          </TabsList>

          {/* Installation Tab */}
          <TabsContent value="installation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Installation Guide
                </CardTitle>
                <p className="text-slate-600 dark:text-slate-400">
                  Follow these steps to install your ThemeForest theme successfully
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {installationSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = activeStep === step.id;
                  
                  return (
                    <div key={step.id} className="space-y-4">
                      <div 
                        className={`flex items-start gap-4 p-4 rounded-lg border cursor-pointer transition-all ${
                          isActive 
                            ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' 
                            : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                        }`}
                        onClick={() => setActiveStep(isActive ? null : step.id)}
                      >
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          isActive 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                        }`}>
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Icon className="h-4 w-4" />
                            <h3 className="font-semibold text-slate-900 dark:text-white">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      
                      {isActive && (
                        <div className="ml-12 space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-700 dark:text-slate-300">{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Customization Tab */}
          <TabsContent value="customization" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Color Customization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">CSS Variables</h4>
                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-md">
                      <code className="text-sm">
                        :root {'{'}
                        <br />
                        &nbsp;&nbsp;--primary: #2563eb;
                        <br />
                        &nbsp;&nbsp;--secondary: #64748b;
                        <br />
                        {'}'}
                      </code>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Tailwind Config</h4>
                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-md">
                      <code className="text-sm">
                        theme: {'{'}
                        <br />
                        &nbsp;&nbsp;colors: {'{'}
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;primary: '#2563eb'
                        <br />
                        &nbsp;&nbsp;{'}'}
                        <br />
                        {'}'}
                      </code>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Typography Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Font Configuration</h4>
                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-md">
                      <code className="text-sm">
                        fontFamily: {'{'}
                        <br />
                        &nbsp;&nbsp;sans: ['Inter', 'sans-serif'],
                        <br />
                        &nbsp;&nbsp;heading: ['Poppins', 'sans-serif']
                        <br />
                        {'}'}
                      </code>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Google Fonts Import</h4>
                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-md">
                      <code className="text-sm">
                        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
                      </code>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Content Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-md">
                    <span className="text-sm font-medium">Update site title</span>
                    <Badge variant="secondary">index.html</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-md">
                    <span className="text-sm font-medium">Modify hero content</span>
                    <Badge variant="secondary">home.tsx</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-md">
                    <span className="text-sm font-medium">Update portfolio data</span>
                    <Badge variant="secondary">portfolio-data.ts</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-md">
                    <span className="text-sm font-medium">Configure contact form</span>
                    <Badge variant="secondary">email.ts</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Environment Setup</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Required Variables</h4>
                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-md">
                      <code className="text-sm">
                        NODE_ENV=production
                        <br />
                        DATABASE_URL=your_db_url
                        <br />
                        GMAIL_USER=your_email
                        <br />
                        GMAIL_APP_PASSWORD=your_password
                      </code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Deployment Tab */}
          <TabsContent value="deployment" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Deployment Platforms</CardTitle>
                <p className="text-slate-600 dark:text-slate-400">
                  Choose the platform that best fits your needs
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  {platforms.map((platform) => (
                    <div key={platform.name} className={`p-4 border rounded-lg ${
                      platform.recommended 
                        ? 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20' 
                        : 'border-slate-200 dark:border-slate-700'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{platform.name}</h3>
                        {platform.recommended && (
                          <Badge className="bg-blue-500">Recommended</Badge>
                        )}
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                        {platform.description}
                      </p>
                      <ul className="space-y-1">
                        {platform.steps.map((step, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Deploy Commands</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Build for Production</h4>
                  <div className="bg-slate-900 dark:bg-slate-800 p-4 rounded-md">
                    <code className="text-green-400 text-sm">
                      npm run build
                    </code>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Start Production Server</h4>
                  <div className="bg-slate-900 dark:bg-slate-800 p-4 rounded-md">
                    <code className="text-green-400 text-sm">
                      npm start
                    </code>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Deploy to Render</h4>
                  <div className="bg-slate-900 dark:bg-slate-800 p-4 rounded-md">
                    <code className="text-green-400 text-sm">
                      git add . && git commit -m "Deploy" && git push origin main
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Troubleshooting Tab */}
          <TabsContent value="troubleshooting" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Common Issues & Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {troubleshooting.map((item, index) => (
                    <div key={index} className="border-l-4 border-orange-400 pl-4 py-2">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                        {item.problem}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {item.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Need More Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Button variant="outline" className="justify-start gap-2" asChild>
                    <a href="https://help.market.envato.com/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Envato Help Center
                    </a>
                  </Button>
                  <Button variant="outline" className="justify-start gap-2" asChild>
                    <a href="https://themeforest.net/forums" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      ThemeForest Forums
                    </a>
                  </Button>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-1">
                    Contact Support
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    If you're still having issues, feel free to contact us through the main contact form. 
                    Include details about your setup and the specific problem you're experiencing.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}