/*
  Warnings:

  - Made the column `street` on table `address` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "address_customerId_key";

-- AlterTable
ALTER TABLE "address" ALTER COLUMN "street" SET NOT NULL;
