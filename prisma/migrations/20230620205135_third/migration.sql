/*
  Warnings:

  - You are about to drop the column `subject` on the `Form` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Form" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Form" ("createdAt", "email", "id", "message", "name") SELECT "createdAt", "email", "id", "message", "name" FROM "Form";
DROP TABLE "Form";
ALTER TABLE "new_Form" RENAME TO "Form";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
