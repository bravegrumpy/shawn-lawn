/*
  Warnings:

  - Added the required column `customerId` to the `address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "address" ADD COLUMN     "customerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
