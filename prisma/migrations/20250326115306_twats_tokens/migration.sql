CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- CreateTable
CREATE TABLE "TwatsToken" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "secret" BYTEA NOT NULL DEFAULT gen_random_bytes(256),
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TwatsToken_pkey" PRIMARY KEY ("id")
);
