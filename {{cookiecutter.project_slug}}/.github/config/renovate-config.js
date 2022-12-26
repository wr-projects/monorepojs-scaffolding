module.exports = {

	configMigration: true,

	baseBranches: 'dev',
	branchPrefix: 'deps/',
	branchNameStrict: true,

	dryRun: true,

	username: 'renovate-release',
	gitAuthor: 'Renovate Bot <bot@renovateapp.com>',

	onboarding: false,
	onboardingBranch: 'deps/',

	platform: 'github',

	includeForks: true,

	repositories: [
		'',
	],

	extends: [
		':gitSignOff',

	],

	labels: ['dependencies'],

	packageRules: [

		// Création de labels

		//
		{
			matchPackagePatterns: ['eslint'],
			addLabels: ['linting'],
			automerge: true,
		},

		//
		{
			matchPackagePatterns: ['prettier'],
			addLabels: ['prettier'],
			automerge: true,
		},

		//
		{
			matchPackagePatterns: ['jest'],
			addLabels: ['test-unit'],
		},

		//
		{
			matchPackageNames: ['nuxtjs'],
			matchPackagePatterns: ['^@nuxtjs/'],
			addLabels: ['nuxtjs'],
		},

		//
		{
			matchUpdateTypes: ['major'],
			addLabels: ['update-major'],
		},

		//
		{
			matchUpdateTypes: ['minor'],
			addLabels: ['update-minor'],
		},

		//
		{
			matchUpdateTypes: ['patch'],
			addLabels: ['patch'],
		},

		//
		{
			matchUpdateTypes: ['pin'],
			addLabels: ['pin'],
		},

		//
		{
			matchUpdateTypes: ['digest'],
			addLabels: ['digest'],
		},

		//
		{
			matchPackagePatterns: ['optionalDependencies'],
			addLabels: ['optional'],
		},

		//
		{
			description: '',
			matchUpdateTypes: [
				'minor',
				'patch',
				'pin',
				'digest'
			],

			automerge: true,
			automergeComment: '',
			automergeType: 'branch',

			dependencyDashboard: true,
			dependencyDashboardApproval: false,
			dependencyDashboardAutoclose: true,
			dependencyDashboardFooter: ##,
			dependencyDashboardHeader: ##,
			dependencyDashboardLabels: ##,
			dependencyDashboardTitle: ##,


			stabilityDays: 0,
		},
	],

	constraints: {
		node: "16.10.0 || 17.0.0 || 18.0.0 || 19.0.0"
	}
}
