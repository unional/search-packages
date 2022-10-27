import cp from 'child_process';
import { pickPackagesWithKeywords } from './pickPackagesWithKeywords.js';
// istanbul ignore next
export function searchByKeywords(keywords, fields) {
    return new Promise((a, r) => {
        cp.exec(`npm search --json --no-description ${keywords.join(' ')}`, (err, stdout) => {
            if (err) {
                r(err);
            }
            else {
                const json = JSON.parse(stdout);
                a(pickPackagesWithKeywords(json, keywords, fields));
            }
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoQnlLZXl3b3Jkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NlYXJjaEJ5S2V5d29yZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9CLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBSXpFLHVCQUF1QjtBQUN2QixNQUFNLFVBQVUsZ0JBQWdCLENBQUMsUUFBa0IsRUFBRSxNQUFpQjtJQUNwRSxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzFCLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0NBQXNDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNsRixJQUFJLEdBQUcsRUFBRTtnQkFDUCxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7YUFDUDtpQkFDSTtnQkFDSCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUMvQixDQUFDLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFBO2FBQ3BEO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMifQ==