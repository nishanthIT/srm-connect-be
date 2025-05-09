"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const profileScraper_1 = require("../services/profileScraper");
const profile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { githubUrl, leetcodeUrl } = req.body;
        // Use the scraper function
        const profileData = yield (0, profileScraper_1.scrapeUserProfiles)({ githubUrl, leetcodeUrl });
        res.status(200).json(profileData);
    }
    catch (error) {
        console.error('Error processing profile request:', error);
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'Failed to fetch profile data' });
        }
    }
});
exports.default = profile;
