/*
  Warnings:

  - A unique constraint covering the columns `[customerId]` on the table `address` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "address" ALTER COLUMN "street" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "address_customerId_key" ON "address"("customerId");
