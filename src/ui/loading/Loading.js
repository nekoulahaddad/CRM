import React from 'react'
import styles from './loading.module.sass'

const Loading = () => {
	return (
		<div className={styles['loading-wrapper']}>
			<div className={styles.loading}>
				<div />
				<div />
				<div />
				<div />
			</div>
		</div>
	)
}

export default Loading
