import express from "express";
import cors from "cors";

import employeeRoutes from "../../backend/src/routes/employeeRoutes";
import roleRoutes from "../../backend/src/routes/roleRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/employees", employeeRoutes);
app.use("/roles", roleRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});