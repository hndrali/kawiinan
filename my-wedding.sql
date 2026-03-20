-- =============================================================================
-- Example: Adding a New Wedding to Sakeenah
-- =============================================================================
-- This file shows how to add a new wedding couple to your database.
-- Simply copy this template, modify the values, and run it in your PostgreSQL database.
--
-- How to run this file:
--   psql -d sakeenah -f add-wedding-example.sql
--   OR copy and paste into your database client (pgAdmin, DBeaver, etc.)
-- =============================================================================

BEGIN;

-- Step 1: Insert main invitation details
INSERT INTO invitations (
    uid,
    title,
    description,
    groom_nickname,
    groom_name,
    bride_nickname,
    bride_name,
    parent_groom,
    parent_bride,
    wedding_date,
    time,
    location,
    address,
    maps_url,
    maps_embed,
    og_image,
    favicon,
    audio
) VALUES (
    'basir-farah-2026',                                           -- UID: Unique identifier (use in URL as ?uid=basir-farah-2026)
    'Pernikahan Basir & Farah',                                   -- Title
    'Kami akan menikah dan mengundang Anda untuk turut merayakan momen istimewa ini.', -- Description
    'Muhamad Saiful Basir',                                            -- Groom's name
    'Basir',                                                           -- Groom's nickname
    'Farah Sania Atie',                                        -- Bride's name
    'Farah',                                                           -- Bride's nickname
    'Bapak Nasir & Ibu Nurhayatun',                               -- Groom's parents
    'Bapak Muhamad Suparman & Ibu Musihatun',                                  -- Bride's parents
    '2026-04-12',                                                   -- Wedding date (YYYY-MM-DD)
    '09:00 - 14:00 WIB',                                           -- Time range
    'Kediaman Mempelai Wanita',                                            -- Venue name
    'Jl. Rambutan Rt 01 Rw 01 Dusun Kedungdadap Kec Kedungreja, Kab Cilacap Jawa Tengah',                      -- Full address
    'https://maps.app.goo.gl/oxeanoTxoC7i91Bt8',                              -- Google Maps short link
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.795361279137!2d108.7400138!3d-7.487834100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6583be9b5af49d%3A0x9b42b22293ae6117!2sJl.%20Rambutan%2C%20Rejamulya%2C%20Kec.%20Kedungreja%2C%20Kabupaten%20Cilacap%2C%20Jawa%20Tengah%2053263!5e0!3m2!1sid!2sid!4v1773799721555!5m2!1sid!2sid" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',              -- Google Maps embed URL (get from Maps � Share � Embed)
    '/images/og-image.jpg',                                        -- Social media preview image
    '/images/favicon.ico',                                         -- Favicon
    '{"src": "/audio/myheart.mp3", "title": "My Heart Soars", "autoplay": true, "loop": true}'::jsonb -- Audio settings
);

-- Step 2: Insert event agenda (can have multiple events: Akad, Resepsi, etc.)
INSERT INTO agenda (invitation_uid, title, date, start_time, end_time, location, address, order_index) VALUES
('basir-farah-2026', 'Akad Nikah', '2026-04-12', '09:00', '10:00', 'Kediaman Mempelai Wanita', 'Jl. Rambutan Rt 01 Rw 01 Dusun Kedungdadap Kec Kedungreja, Kab Cilacap Jawa Tengah', 1),
('basir-farah-2026', 'Resepsi Nikah', '2026-04-12', '10:30', '15:00', 'Kediaman Mempelai Wanita', 'Jl. Rambutan Rt 01 Rw 01 Dusun Kedungdadap Kec Kedungreja, Kab Cilacap Jawa Tengah', 2);

-- Step 3: Insert bank accounts for digital envelope (can have multiple banks)
INSERT INTO banks (invitation_uid, bank, account_number, account_name, order_index) VALUES
('basir-farah-2026', 'Bank Central Asia', '1234567890', 'MUHAMAD SAIFUL BASIR', 1),
('basir-farah-2026', 'Bank Syariah Indonesia', '0987654321', 'FARAH SANIA ATIE', 2);

COMMIT;

-- =============================================================================
-- Now you can access this wedding at:
-- http://localhost:5173/?uid=basir-farah-2026
-- =============================================================================


-- =============================================================================
-- TEMPLATE FOR QUICK COPY-PASTE
-- =============================================================================
-- Just replace the values below and run it!
-- =============================================================================
/*

BEGIN;

INSERT INTO invitations (uid, title, description, groom_name, bride_name, parent_groom, parent_bride, wedding_date, time, location, address, maps_url, maps_embed, og_image, favicon) VALUES
('CHANGE-ME-2025', 'Pernikahan X & Y', 'Your description here', 'Groom Name', 'Bride Name', 'Groom Parents', 'Bride Parents', '2025-12-31', '09:00 - 12:00 WIB', 'Venue Name', 'Full Address', 'https://goo.gl/maps/...', 'https://www.google.com/maps/embed?pb=...', '/images/og-image.jpg', '/images/favicon.ico');

INSERT INTO agenda (invitation_uid, title, date, start_time, end_time, location, address, order_index) VALUES
('CHANGE-ME-2025', 'Akad Nikah', '2025-12-31', '09:00', '10:30', 'Venue 1', 'Address 1', 1),
('CHANGE-ME-2025', 'Resepsi', '2025-12-31', '11:00', '14:00', 'Venue 2', 'Address 2', 2);

INSERT INTO banks (invitation_uid, bank, account_number, account_name, order_index) VALUES
('CHANGE-ME-2025', 'Bank Name 1', '1234567890', 'ACCOUNT NAME 1', 1),
('CHANGE-ME-2025', 'Bank Name 2', '0987654321', 'ACCOUNT NAME 2', 2);

COMMIT;

*/
