// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";
async function registerRoutes(app2) {
  app2.get("/api/fraud-types", (req, res) => {
    const fraudTypes = [
      {
        id: 1,
        type: "phishing",
        title: "Phishing prin linkuri frauduloase",
        description: "Atacatorii trimit mesaje ce con\u021Bin linkuri care par legitime dar te direc\u021Bioneaz\u0103 c\u0103tre site-uri false."
      },
      {
        id: 2,
        type: "spoofing",
        title: "Spoofing \u0219i Impersonare",
        description: "Fraudatorii falsific\u0103 numere de telefon sau adrese de email pentru a p\u0103rea c\u0103 te contacteaz\u0103 din partea b\u0103ncii."
      },
      {
        id: 3,
        type: "data_requests",
        title: "Solicit\u0103ri de date bancare complete",
        description: "Fraudatorii solicit\u0103 date bancare complete sub pretextul unor pl\u0103\u021Bi sau actualiz\u0103ri."
      },
      {
        id: 4,
        type: "remote_control",
        title: "Aplica\u021Bii de control la distan\u021B\u0103",
        description: "Convingerea victimei s\u0103 instaleze aplica\u021Bii care permit controlul de la distan\u021B\u0103 al dispozitivului."
      }
    ];
    res.json(fraudTypes);
  });
  app2.get("/api/protection-tips", (req, res) => {
    const tips = [
      {
        id: 1,
        category: "personal_data",
        title: "Protejarea informa\u021Biilor personale",
        tips: [
          "Nu furniza niciodat\u0103 date personale complete precum CNP sau creden\u021Biale",
          "Pentru a primi bani, doar IBAN-ul este necesar"
        ]
      },
      {
        id: 2,
        category: "communication",
        title: "Verificarea comunic\u0103rilor",
        tips: [
          "Verific\u0103 \xEEntotdeauna adresa de email a expeditorului",
          "Fii atent la gre\u0219elile gramaticale din mesaje"
        ]
      }
    ];
    res.json(tips);
  });
  app2.post("/api/quiz-results", (req, res) => {
    const { score, totalQuestions } = req.body;
    if (typeof score !== "number" || typeof totalQuestions !== "number") {
      return res.status(400).json({ message: "Score and totalQuestions must be numbers" });
    }
    res.json({
      message: "Quiz results saved successfully",
      percentageCorrect: Math.round(score / totalQuestions * 100)
    });
  });
  app2.get("/api/fraud-alerts", (req, res) => {
    const alerts = [
      {
        id: 1,
        title: "Alert\u0103 nou\u0103 de fraud\u0103",
        content: "A fost identificat recent un nou val de SMS-uri frauduloase care pretind c\u0103 sunt de la servicii de curierat.",
        date: "2023-07-15",
        severity: "high"
      },
      {
        id: 2,
        title: "Campanie de phishing \xEEn desf\u0103\u0219urare",
        content: "S-a observat o campanie de phishing care \u021Binte\u0219te clien\u021Bii b\u0103ncilor prin emailuri false despre actualizarea aplica\u021Biei.",
        date: "2023-07-10",
        severity: "medium"
      }
    ];
    res.json(alerts);
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  base: "./",
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
